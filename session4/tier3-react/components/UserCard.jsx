function UserCard({ name, email, avatar }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px"
      }}
    >
      <img
        src={avatar}
        alt={name}
      />

      <h3>{name}</h3>

      <p>{email}</p>
    </div>
  );
}

export default UserCard;