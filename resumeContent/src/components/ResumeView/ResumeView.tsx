// src/components/Resume/ResumeView.tsx
import React, { useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';
import quests from '../../data/quests.data';
import type { Quest } from '../../data/quests.data';
import './ResumeView.css';
import generatePDF from '../../utils/pdfGenerator';

// Helper function to format dates consistently, avoiding timezone issues
const formatDate = (date: Date): string => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Use UTC methods to avoid timezone conversion issues
  return `${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
};

const isCareerQuest = (quest: Quest): boolean =>
  quest.type === 'career' &&
  Boolean(quest.company) &&
  quest.company !== 'Personal Project';

const ResumeView: React.FC = () => {
  const { theme } = useTheme()!;
  
  // Transform quest data into resume format
  const resumeData = useMemo(() => {
    const careerQuests = quests.filter(isCareerQuest).sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

    // Summary: prefer authored `summary` text from newest roles (avoids duplicating role `description` under each employer)
    const summaryFromAuthors = careerQuests
      .map((q) => q.summary?.trim())
      .filter((text): text is string => Boolean(text))
      .slice(0, 3);
    const summaryParagraphs =
      summaryFromAuthors.length > 0
        ? summaryFromAuthors
        : careerQuests.slice(0, 2).map((q) => q.description.trim()).filter(Boolean);

    // Core competencies from tags on career quests (frequency, then name)
    const tagToCompanies = new Map<string, Set<string>>();
    const tagFrequency = new Map<string, number>();
    for (const quest of careerQuests) {
      const company = quest.company;
      if (!company) continue;
      for (const tag of quest.tags ?? []) {
        const key = tag.trim();
        if (!key) continue;
        if (!tagToCompanies.has(key)) {
          tagToCompanies.set(key, new Set());
          tagFrequency.set(key, 0);
        }
        tagToCompanies.get(key)!.add(company);
        tagFrequency.set(key, (tagFrequency.get(key) ?? 0) + 1);
      }
    }
    const competencies = Array.from(tagToCompanies.entries())
      .map(([tag, companies]) => {
        const list = Array.from(companies).sort((a, b) => a.localeCompare(b));
        const blurb =
          list.length > 1
            ? `Recurring focus across roles at ${list.join(', ')}.`
            : `Primary focus during tenure at ${list[0]}.`;
        return { tag, blurb, frequency: tagFrequency.get(tag) ?? 0 };
      })
      .sort((a, b) => b.frequency - a.frequency || a.tag.localeCompare(b.tag))
      .map(({ tag, blurb }) => ({ tag, blurb }));

    const experience = careerQuests.map((quest) => ({
      id: quest.id,
      company: quest.company,
      role: quest.workTitle,
      overview: quest.description.trim(),
      startDate: quest.startDate,
      endDate: quest.endDate,
      accomplishments: quest.accomplishments.map((acc) => acc.description),
    }));

    const education = quests
      .filter((quest) => quest.type === 'education')
      .map((edu) => ({
        institution: edu.company,
        degree: edu.accomplishments.map((acc) => acc.description)[0],
        startDate: edu.startDate,
        endDate: edu.endDate,
        details: edu.accomplishments.map((acc) => acc.description),
      }))
      .sort((a, b) => b.endDate.getTime() - a.endDate.getTime());

    const skills = Array.from(
      new Set(
        quests.flatMap((quest) => quest.accomplishments.flatMap((acc) => acc.learnings)),
      ),
    );

    return { experience, education, skills, summaryParagraphs, competencies };
  }, []);

  const handleDownloadPDF = () => {
    generatePDF(resumeData, 'Professional_Resume.pdf');
  };

  return (
    <div className={`resume-container ${theme}`}>
<div className="resume-header">
  <div className="header-content">
    <h1>Alonzo Williams</h1>
    <div className="contact-info">
      awilliams9293@gmail.com<br/>
      https://www.linkedin.com/in/alonzo-williams-1160a7b0/<br/>
      Chicago, IL<br/>
    </div>
  </div>
  <button className="download-button" onClick={handleDownloadPDF}>
    Download PDF
  </button>
</div>
      
      <div className="resume-content">
        {/* Professional Summary (from quest summaries / descriptions, newest roles first) */}
        <section className="resume-section">
          <h2>Professional Summary</h2>
            <p className="summary-text">
              Strategic technology leader with over a decade of experience in software architecture and development. Demonstrated expertise in transforming legacy systems, leading cross-functional teams, and implementing scalable architectures across multiple industries. Consistently delivers solutions through thoughtful architectural decisions and effective team leadership.
            </p>
          
        </section>
        {/* Core competencies (unique tags on career quests) */}
        <section className="resume-section">
          <h2>Core Competencies</h2>
          <div className="competencies-grid">
    
          <div className="competency-item">
      <h3>Technology Leadership</h3>
      <p>Skilled at guiding cross-functional development teams through complete project lifecycles while maintaining focus on quality and delivery timelines.</p>
    </div>
    
    <div className="competency-item">
      <h3>Enterprise Integration</h3>
      <p>Extensive experience implementing integration solutions across disparate systems, leveraging service-oriented approaches and API design best practices.</p>
    </div>
    
    <div className="competency-item">
      <h3>Cloud Infrastructure</h3>
      <p>Proficient with Azure cloud services implementation, focusing on scalable architectures that optimize for both performance and cost.</p>
    </div>
    
    <div className="competency-item">
      <h3>Development Practices</h3>
      <p>Strong advocate for engineering excellence through SOLID principles, comprehensive testing strategies, and continuous integration practices.</p>
    </div>
    
    <div className="competency-item">
      <h3>AI/Technology Modernization</h3>
      <p>Demonstrated success in leading legacy system transformations. Active AI enthusiast integrating AI into workflows.</p>
    </div>
          </div>
        </section>
        {/* Professional Experience */}
        <section className="resume-section">
          <h2>Professional Experience</h2>
          {resumeData.experience.map((job) => (
            <div key={job.id} className="experience-item">
              <div className="job-header">
                <h3>{job.role}</h3>
                <div className="company-period">
                  <span className="company-name">{job.company}</span>
                  <span className="job-period">
                    {formatDate(job.startDate)} – 
                    {job.endDate.getFullYear() >= 2030 
                      ? ' Present' 
                      : formatDate(job.endDate)}
                  </span>
                </div>
              </div>
              {job.overview ? <p className="role-overview">{job.overview}</p> : null}
              <ul className="accomplishment-bullets">
                {job.accomplishments.map((acc, i) => (
                  <li key={i}>{acc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        
        {/* Education Section */}
        {resumeData.education && resumeData.education.length > 0 && (
          <section className="resume-section">
            <h2>Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h3>{edu.degree}</h3>
                <div className="institution-period">
                  <span className="institution-name">{edu.institution}</span>
                  <span className="education-period">
                    {new Date(edu.startDate).getFullYear()} – {new Date(edu.endDate).getFullYear()}
                  </span>
                </div>
                {edu.details && edu.details.length > 0 && (
                  <ul className="education-details">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}
    
      </div>
    </div>
  );
};

export default ResumeView;