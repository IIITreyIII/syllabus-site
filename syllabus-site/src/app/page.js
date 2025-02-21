"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.mainContainer}>
      {/* header */}
      <div style={styles.headerSection}>
        <h1 style={styles.title}>
          Welcome to the Syllabus Project <span style={{ fontSize: "1.2rem" }}>📚</span>
        </h1>
        <p style={styles.subtitle}>A quick guide on effective syllabus creation</p>
      </div>

      {/* contributors & theories Box */}
      <div style={styles.contentBox}>
        <h2 style={styles.boxTitle}>Contributors</h2>
        <ul style={styles.list}>
          <li>Carly Spinazzola – ZPD</li>
          <li>Zoe Ramachandran – Cognitive Apprenticeship</li>
          <li>Eric Outley – Epistemological (Project Based Learning + Pragmatism)</li>
        </ul>
      </div>

      {/* intro */}
      <div style={styles.contentBox}>
        <p>
          We gathered about a dozen college-level course syllabi from a few different universities.
          We chose to use the <strong>CIS 424</strong> course syllabus for our project because we
          thought that it was very detailed and had a good overview of the project specifics.
        </p>
      </div>

      {/* course Information */}
      <div style={styles.contentBox}>
        <h2 style={styles.boxTitle}>Course Information</h2>
        <ul style={styles.list}>
          <li>
            <strong>Course Title:</strong> Information System Assurance Risk Analysis
          </li>
          <li>
            <strong>Institution & Term:</strong> Louisiana Tech University, Winter 2024
          </li>
          <li style={{ marginTop: "0.5rem" }}>
            <strong style={{ display: "block", marginBottom: "0.25rem" }}>
              Course Description:
            </strong>
            <span style={styles.courseDescription}>
              This is a course designed to provide students an understanding of Information
              Assurance Risk management. Students are advised to pay attention to the lectures,
              sample problems, and lab exercises.
            </span>
          </li>
        </ul>
      </div>

      {/* nav button */}
      <div style={styles.buttonContainer}>
        <Link href="/learning-theories">
          <button style={styles.button}>
            Learning Theories <span>➡️</span>
          </button>
        </Link>
      </div>
    </main>
  );
}

const styles = {
  mainContainer: {
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    backgroundColor: "#f7f9fc",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  headerSection: {
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    margin: 0,
  },
  subtitle: {
    color: "#555",
    marginTop: "0.5rem",
  },
  contentBox: {
    backgroundColor: "#fff",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  boxTitle: {
    fontSize: "1.25rem",
    marginBottom: "0.75rem",
    color: "#333",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    margin: 0,
  },
  courseDescription: {
    display: "inline-block",
    fontStyle: "italic",
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.75rem 1.25rem",
    cursor: "pointer",
    fontSize: "1rem",
  },
};
