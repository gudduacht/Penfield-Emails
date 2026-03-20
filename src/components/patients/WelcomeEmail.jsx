export default function WelcomeEmail() {
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
    padding: "22px 24px 26px",
  };

  const logo = {
    width: "68px",
    height: "68px",
    margin: "0 auto 24px",
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
    padding: "28px 30px 38px",
    textAlign: "left",
  };

  const paragraph = {
    margin: "0 0 24px",
    fontSize: "17px",
    lineHeight: "1.55",
    color: "#374151",
  };

  const list = {
    margin: "0 0 34px",
    paddingLeft: "24px",
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#374151",
  };

  const panel = {
    margin: "0 0 28px",
    padding: "28px 24px 22px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
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
          <p style={paragraph}>Hello {`{{PatientName}}`},</p>

          <p style={paragraph}>
            Welcome to <strong>{`{{ClinicName}}`}</strong>!
          </p>

          <p style={{ ...paragraph, marginBottom: "18px" }}>
            Your patient portal account has been successfully created, You can
            now securely access your portal to:
          </p>

          <ul style={list}>
            <li style={{ marginBottom: "6px" }}>View your healthcare profile</li>
            <li style={{ marginBottom: "6px" }}>Complete intake forms</li>
            <li style={{ marginBottom: "6px" }}>View upcoming appointments</li>
            <li style={{ marginBottom: "6px" }}>Send secure messages</li>
            <li>Access treatment information</li>
          </ul>

          <div style={panel}>
            <p style={{ ...paragraph, marginBottom: "10px" }}>
              <strong>Username:</strong> {`{{PatientEmail}}`}
            </p>

            <p style={{ ...paragraph, marginBottom: "18px" }}>
              <strong>Patient Portal:</strong> {`{{PatientPortalLoginUrl}}`}
            </p>

            <button
              type="button"
              style={{
                display: "inline-block",
                margin: "0 0 18px",
                padding: "14px 20px",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Log In to Your Portal
            </button>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "24px",
                color: "#9ca3af",
              }}
            >
              For future access, please bookmark the login page.
            </p>
          </div>

          <p style={paragraph}>
            If you did not create this account or need assistance, please
            contact us:
          </p>

          <div
            style={{
              margin: "0 0 6px",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#374151",
            }}
          >
            &#128222; {`{{ClinicPhone}}`}
          </div>

          <div
            style={{
              margin: "0 0 26px",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#374151",
            }}
          >
            &#9993; {`{{ClinicSupportEmail}}`}
          </div>

          <p style={paragraph}>
            Thank you for choosing <strong>{`{{ClinicName}}`}</strong>. We look
            forward to supporting your care.
          </p>

          <p style={{ ...paragraph, marginBottom: 0 }}>
            Warm regards,
            <br />
            <strong>The {`{{ClinicName}}`} Team</strong>
          </p>
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
            {`{{ClinicName}}`} | {`{{ClinicAddress}}`}, {`{{ClinicCityStateZip}}`}
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
