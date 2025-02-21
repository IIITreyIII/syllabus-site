"use client";
import { useState } from "react";
import Link from "next/link";

export default function LearningTheories() {
  // Learning theory data
  const theories = [
    {
      title: "Cognitive Apprenticeship",
      content: (
        <>
          <ul>
            <li>
              The class is completely asynchronous, meaning the students have to be
              self-motivated to get the material done themselves and work on the projects on their own.
              Some aspects that may be missing from this theory may be that the students do not have
              access to modeling or observation.
            </li>
            <li>
              It is unclear if students have any group projects. With it being completely asynchronous,
              we assume that perhaps not, but the material does seem to lend itself well to this possibility.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Zone of Proximal Development",
      content: (
        <>
          <ul>
            <li>
              This is a 400-level class, meaning that students should have the required prerequisite
              knowledge and coursework to competently complete this course.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Epistemological",
      content: (
        <>
          <ul>
            <li>
              <strong>Empiricism:</strong> Observations, sensory experience, experiential learning,
              teacher is the facilitator.
            </li>
            <li>
              <strong>Constructivism:</strong> Knowledge through experience.
            </li>
            <li>
              This course has been designed to integrate theoretical concepts with their practical
              applications to teach both the theory and the practice of information systems risk
              analysis. The emphasis on practice is important because in many areas of information
              systems, theory lags practice.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Project Based Learning",
      content: (
        <>
          <ul>
            <li>
              <strong>Project (CIS 524 students only):</strong>
              <ul>
                <li>
                  Purpose of the project is to provide an opportunity to apply the competencies
                  gained to the lessons of this class to develop a risk management plan for a fictitious
                  to replace its outdated plan. By the end of the class, students will have 1) individual
                  presentation and 2) individual report.
                </li>
              </ul>
            </li>
            <li>
              <strong>Project Report (70 points):</strong>
              <ul>
                <li>
                  This is a report which includes details of risk management plan, risk assessment plan,
                  risk mitigation plan, business impact analysis plan, business continuity plan, disaster
                  recovery plan, and computer incident response team plan. In addition, this report needs
                  to include proper references. This has to be submitted on the day of the presentation.
                  (APA Style, Font size: 11, Double Line Space, Time New Roman).
                </li>
              </ul>
            </li>
            <li>
              <strong>Project Presentations (30 points):</strong>
              <ul>
                <li>
                  This presentation needs to include not only the overall information regarding the
                  development of the risk management plan but also provides detailed processes of each
                  part of the risk management planning that students performed. Each student needs to
                  create a PowerPoint slide with the recorded explanation then submit it via Canvas. A
                  softcopy also needs to be emailed to the professor (jakelee@latech.edu) before the
                  beginning of the presentation.
                </li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Pragmatism",
      content: (
        <>
          <ul>
            <li>To introduce risk management business challenges</li>
            <li>To cover risk assessment approaches and apply risk assessment into risk mitigation plan</li>
            <li>Developing risk management plan</li>
            <li>Implementation and maintenance of risk mitigation plans</li>
          </ul>
        </>
      ),
    },
    {
      title: "Cognitivism",
      content: (
        <>
          <p>
            Knowledge involves internal mental processes like memory, perception, and problem-solving.
          </p>
        </>
      ),
    },
    {
      title: "Behaviorism",
      content: (
        <>
          <ul>
            <li>
              The student shall be responsible for all material covered in the class. Each exam will
              include not only the material from the assigned text chapters, but also from any readings,
              and any other materials covered in the class lectures. You are also responsible for any
              announcements made in class as well as Canvas postings and announcements via email.
            </li>
            <li>
              Policies on academic integrity, using IA, and attendance.
            </li>
          </ul>
        </>
      ),
    },
  ];

  // track which theory is open
  const [openIndex, setOpenIndex] = useState(null);

  // track which title is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Toggle function
  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // home hover state
  const [isHomeHovered, setIsHomeHovered] = useState(false);

  return (
    <main style={styles.main}>
      {/* Navigation Bar with Home Button */}
      <div style={styles.navBar}>
        <Link href="/">
          <button
            style={{
              ...styles.homeButton,
              backgroundColor: isHomeHovered ? "#0050c3" : "#0070f3",
            }}
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
          >
            ⬅️ Home
          </button>
        </Link>
      </div>

      {/* Header Box */}
      <div style={styles.headerBox}>
        <h1 style={styles.headerTitle}>Learning Theories</h1>
        <p style={styles.headerSubtitle}>
          This page will discuss various learning theories related to syllabus design.
        </p>
      </div>

      {/* Theories List (Accordion) */}
      <div style={styles.theoriesContainer}>
        {theories.map((theory, index) => {
          const isOpen = openIndex === index;
          const isHovered = hoveredIndex === index;

          return (
            <div key={index} style={styles.theoryBox}>
              {/* Title Row */}
              <div
                style={{
                  ...styles.titleRow,
                  backgroundColor: isHovered ? "#f0f0f0" : "#fff",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleToggle(index)}
              >
                <span>{theory.title}</span>
                {/* Rotating arrow when expanded */}
                <span
                  style={{
                    ...styles.arrow,
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  ▸
                </span>
              </div>

              {/* Collapsible Content */}
              <div
                style={{
                  ...styles.collapsibleContent,
                  maxHeight: isOpen ? "1000px" : "0",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div style={styles.contentArea}>{theory.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

// --- Inline Styles ---
const styles = {
  main: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to bottom, #f7f9fc, #e2e8f0)",
    minHeight: "100vh",
    padding: "1rem",
  },
  navBar: {
    marginBottom: "1rem",
  },
  homeButton: {
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  headerBox: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    padding: "1.5rem",
    maxWidth: "600px",
    margin: "0 auto 2rem auto",
    textAlign: "center",
  },
  headerTitle: {
    margin: 0,
    fontSize: "1.75rem",
  },
  headerSubtitle: {
    color: "#555",
    marginTop: "0.5rem",
    fontSize: "1rem",
  },
  theoriesContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  theoryBox: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: "1rem",
    fontWeight: "bold",
    fontSize: "1rem",
    borderBottom: "1px solid #eaeaea",
    transition: "background-color 0.3s ease",
  },
  arrow: {
    marginLeft: "0.5rem",
    fontSize: "1.25rem",
    transition: "transform 0.3s ease",
  },
  collapsibleContent: {
    overflow: "hidden",
    transition: "max-height 0.4s ease, opacity 0.4s ease",
  },
  contentArea: {
    padding: "1rem",
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },
};
