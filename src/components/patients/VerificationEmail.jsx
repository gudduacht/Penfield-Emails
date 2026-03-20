export default function VerificationEmail() {
  const page = {
    minHeight: "100vh",
    margin: 0,
    backgroundColor: "#f3f4f6",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: "#374151",
  };

  const card = {
    width: "100%",
    maxWidth: "669px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  };

  const header = {
    backgroundColor: "#f3f4f6",
    textAlign: "center",
    padding: "42px 24px 34px",
  };

  const logo = {
    width: "58px",
    height: "58px",
    margin: "0 auto 22px",
    borderRadius: "999px",
    border: "1px solid #d8dde5",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    color: "#9ca3af",
  };

  const body = {
    padding: "28px 30px 40px",
  };

  const paragraph = {
    margin: "0 0 24px",
    fontSize: "17px",
    lineHeight: "1.6",
    color: "#374151",
  };

  const footer = {
    backgroundColor: "#f3f4f6",
    textAlign: "center",
    padding: "24px 20px 20px",
  };

  return (
    <div style={page}>
      <div style={card}>
        <div style={header}>
          <div style={logo}>Logo</div>
          <div
            style={{
              margin: "0 0 8px",
              fontSize: "26px",
              lineHeight: "1.2",
              fontWeight: 700,
              color: "#1f2937",
            }}
          >
            {`{{ClinicName}}`}
          </div>
          <div
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "#7b8190",
            }}
          >
            {`{{ClinicTagline}}`}
          </div>
        </div>

        <div style={body}>
          <div style={{ textAlign: "left" }}>
          <p style={{ ...paragraph, marginBottom: "22px" }}>
            Hello {`{{PatientFirstName}}`},
          </p>

          <p style={paragraph}>
            Thank you for registering with <strong>{`{{ClinicName}}`}</strong>.
          </p>

          <p style={{ ...paragraph, marginBottom: "34px" }}>
            To activate your patient portal and securely access your
            information, please verify your email address by clicking the button
            below.
          </p>

          <div style={{ textAlign: "center", margin: "0 0 28px" }}>
            <button
              type="button"
              style={{
                display: "inline-block",
                minWidth: "294px",
                padding: "16px 26px",
                borderRadius: "4px",
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 700,
                textAlign: "center",
                border: "none",
                cursor: "pointer",
              }}
            >
              Verify Email &amp; Activate Account
            </button>
          </div>

          <p style={paragraph}>
            This verification link will expire in <strong>24 hours</strong>. If
            it expires, you may request a new verification email.
          </p>

          <p style={paragraph}>
            If you did not create this account, please contact us immediately.
          </p>

          <p style={{ ...paragraph, marginBottom: "30px" }}>
            Thank you,
            <br />
            <strong>The {`{{ClinicName}}`} Team</strong>
          </p>

          <p style={{ ...paragraph, marginBottom: "10px" }}>Need assistance?</p>

          <div
            style={{
              margin: "0 0 6px",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#4b5563",
            }}
          >
            &#128222; {`{{ClinicPhone}}`}
          </div>

          <div
            style={{
              fontSize: "16px",
              lineHeight: "28px",
              color: "#4b5563",
            }}
          >
            &#9993; {`{{ClinicSupportEmail}}`}
          </div>
          </div>
        </div>

        <div style={footer}>
          <div
            style={{
              margin: "0 0 4px",
              fontSize: "15px",
              lineHeight: "24px",
              color: "#7b8190",
            }}
          >
            {`{{ClinicName}}`} | {`{{ClinicAddress}}`},{" "}
            {`{{ClinicCityStateZip}}`}
          </div>

          <div
            style={{
              margin: "0 0 6px",
              fontSize: "15px",
              lineHeight: "24px",
              color: "#7b8190",
            }}
          >
            {`{{ClinicWebsite}}`}
          </div>

          <div
            style={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#a1a8b3",
            }}
          >
            This is a secure system-generated email. Please do not reply
            directly to this message.
          </div>
        </div>
      </div>
    </div>
  );
}
