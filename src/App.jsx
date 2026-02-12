import ProfileCard from "./components/ProfileCard";
import "./styles.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Nihal",
      role: "Frontend Developer",
      description: "Loves React and UI design"
    },
    {
      id: 2,
      name: "Aisha",
      role: "Backend Developer",
      description: "Node.js & MongoDB expert"
    },
    {
      id: 3,
      name: "Rahul",
      role: "Full Stack Dev",
      description: "Builds complete apps"
    }
  ];

  return (
    <div className="container">
      {users.map(user => (
        <ProfileCard key={user.id} {...user} />
      ))}
    </div>
  );
}

export default App;
