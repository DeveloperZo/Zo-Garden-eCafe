// src/components/Resume/ResumeView.tsx
import React, { useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';
import quests from '../../data/quests.data';
import type { Quest } from '../../data/quests.data';
import { coreCompetencies, professionalSummary } from '../../data/profile.data';
import './ResumeView.css';
import { generateResumePdfFromDom } from '../../utils/pdfGenerator';

// Helper function to format dates consistently, avoiding timezone issues
const formatDate = (date: Date): string => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Use UTC methods to avoid timezone conversion issues
  return `${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
};

const isExperienceQuest = (quest: Quest): boolean =>
  quest.type === 'career' &&
  Boolean(quest.company) &&
  quest.company !== 'Personal Project';

const isConsultingQuest = (quest: Quest): boolean => quest.type === 'independent';

const isProjectQuest = (quest: Quest): boolean => quest.type === 'hobby';

const ResumeView: React.FC = () => {
  const { theme } = useTheme()!;
  
  // Transform quest data into resume format
  const resumeData = useMemo(() => {
    const toResumeEntry = (quest: Quest) => ({
      id: quest.id,
      company: quest.company,
      role: quest.workTitle,
      overview: quest.description.trim(),
      startDate: quest.startDate,
      endDate: quest.endDate,
      accomplishments: quest.accomplishments.map((acc) => acc.description),
    });

    const byStartDesc = (a: Quest, b: Quest) => b.startDate.getTime() - a.startDate.getTime();

    const consultingTitle = (quest: Quest) => {
      const prefix = 'Independent Consulting, ';
      const company = quest.company ?? '';
      return company.startsWith(prefix)
        ? company.slice(prefix.length)
        : quest.workTitle;
    };

    const experience = quests.filter(isExperienceQuest).sort(byStartDesc).map(toResumeEntry);
    const consulting = quests
      .filter((quest) => isConsultingQuest(quest) && quest.id !== 11)
      .sort(byStartDesc)
      .map((quest) => ({
      ...toResumeEntry(quest),
      role: consultingTitle(quest),
      company: 'Independent Consulting',
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

    const projects = quests
      .filter(isProjectQuest)
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
      .map((quest) => ({
        id: quest.id,
        name: quest.titles.sleek,
        overview: quest.description.trim(),
        startDate: quest.startDate,
        endDate: quest.endDate,
        link: quest.externalLink,
        accomplishments: quest.accomplishments.map((acc) => acc.description),
      }));

    return { experience, consulting, education, projects, skills };
  }, []);

  const handleDownloadPDF = () => {
    void generateResumePdfFromDom('Alonzo_Williams_Resume.pdf');
  };

  return (
    <div className={`resume-container ${theme}`}>
      <div className="resume-header">
        <div className="header-content">
          <h1>Alonzo Williams</h1>
          <div className="contact-info">
            awilliams9293@gmail.com<br />
            https://www.linkedin.com/in/alonzo-williams-1160a7b0/<br />
            Chicago, IL<br />
          </div>
        </div>
        <button type="button" className="download-button" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </div>

      <div className="resume-content">
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p className="summary-text">{professionalSummary}</p>
        </section>
        <section className="resume-section">
          <h2>Core Competencies</h2>
          <div className="competencies-grid">
            {coreCompetencies.map((competency) => (
              <div className="competency-item" key={competency.title}>
                <h3>{competency.title}</h3>
                <p>{competency.body}</p>
              </div>
            ))}
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
                    {formatDate(job.startDate)}
                    {' – '}
                    {job.endDate.getFullYear() >= 2030
                      ? 'Present'
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

        {resumeData.consulting.length > 0 && (
          <section className="resume-section">
            <h2>Principal Technologist</h2>
            {resumeData.consulting.map((job) => (
              <div key={job.id} className="experience-item">
                <div className="job-header">
                  <h3>{job.role}</h3>
                  <div className="company-period">
                    <span className="company-name">{job.company}</span>
                    <span className="job-period">
                      {formatDate(job.startDate)}
                      {' – '}
                      {job.endDate.getFullYear() >= 2030
                        ? 'Present'
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
        )}
        
        {/* Projects */}
        {resumeData.projects.length > 0 && (
          <section className="resume-section">
            <h2>Projects</h2>
            {resumeData.projects.map((project) => (
              <div key={project.id} className="experience-item">
                <div className="job-header">
                  <h3>{project.name}</h3>
                  <div className="company-period">
                    <span className="company-name">
                      {project.link ? (
                        <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      ) : (
                        'Personal Project'
                      )}
                    </span>
                    <span className="job-period">
                      {formatDate(project.startDate)}
                      {' – '}
                      {project.endDate.getFullYear() >= 2030
                        ? 'Present'
                        : formatDate(project.endDate)}
                    </span>
                  </div>
                </div>
                {project.overview ? <p className="role-overview">{project.overview}</p> : null}
                <ul className="accomplishment-bullets">
                  {project.accomplishments.map((acc, i) => (
                    <li key={i}>{acc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

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