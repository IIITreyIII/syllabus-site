"use client";
import { useState } from "react";
import Link from "next/link";

export default function LearningTheories() {
  // The data for each learning theory
  const theories = [
    {
      title: "Cognitive Apprenticeship",
      content: (
        <>
          <p>
            The class is completely asynchronous, meaning the students have to be
            self-motivated to get the material done themselves and work on the
            projects on their own. Some aspects that may be missing from this theory
            may be that the students do not have access to modeling or observation.
          </p>
          <p>
            It is unclear if students have any group projects. With it being completely
            asynchronous, we assume that perhaps not, but the material does seem to
            lend itself well to this possibility.
          </p>
        </>
      ),
    },
    {
      title: "Zone of Proximal Development",
      content: (
        <>
          <p>
            This is a 400-level class, meaning that students should have the required
            prerequisite knowledge and coursework to competently complete this
            course.
          </p>
        </>
      ),
    },
    {
      title: "Epistemological",
      content: (
        <>
          <p>
            <strong>Empiricism:</strong> Observations, sensory experience, experiential learning,
            teacher is the facilitator.
          </p>
          <p>
            <strong>Constructivism:</strong> Knowledge through experience.
          </p>
          <p>
            This course has been designed to integrate theoretical concepts with their
            practical applications to teach both the theory and the practice of
            information systems risk analysis. The emphasis on practice is important
            because in many areas of information systems, theory lags practice.
          </p>
        </>
      ),
    },
  ];

  // Track which theory is open (null if none are open)
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function
  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main style={styles.main}>
      {/* Navigation Bar with Home Button */}
      <div style={styles.navBar}>
        <Link href="/">
          <button style={styles.homeButton}>⬅️ Home</button>
        </Link>
      </div>

      {/* Header Box */}
      <div style={styles.headerBox}>
        <h1 style={styles.headerTitle}>Learning Theories</h1>
        <p style={styles.headerSubtitle}>
          This page will discuss various learning theories related to syllabus design.
        </p>
      </div>

      {/* Theories List (Vertical Accordion) */}
      <div style={styles.theoriesContainer}>
        {theories.map((theory, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} style={styles.theoryBox}>
              {/* Title Row */}
              <div
                style={styles.titleRow}
                onClick={() => handleToggle(index)}
              >
                <span>{theory.title}</span>
                <span style={styles.arrow}>
                  {isOpen ? "▾" : "▸"}
                </span>
              </div>
              {/* Collapsible Content */}
              {isOpen && (
                <div style={styles.contentArea}>
                  {theory.content}
                </div>
              )}
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
    backgroundColor: "#f7f9fc",
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
  },
  arrow: {
    marginLeft: "0.5rem",
    fontSize: "1.25rem",
  },
  contentArea: {
    padding: "1rem",
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },
};
