export default function Info() {
  return (
    <div
      className="info"
      style={{
        marginTop: "-2rem",
        backgroundColor: "#E8E8E8",
        padding: "1.2rem",
        marginLeft: "1rem",
        marginRight: "1rem",
        borderRadius: "15px",
        height: "84vh",
      }}
    >
      <p>
        Idade: <span className="age"></span>
      </p>
      <p>
        sexo: <span className="gender"></span>
      </p>
      <p>
        Estado Civil: <span className="civilStatus"></span>
      </p>
      <p>
        Profissão: <span className="job"></span>
      </p>
    </div>
  );
}
