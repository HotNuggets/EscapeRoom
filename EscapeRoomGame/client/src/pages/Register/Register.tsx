import React, { useState } from "react";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful! ✅");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>
        <input type="text" name="username" placeholder="Enter Username" required value={formData.username} onChange={handleChange}/>
        <input type="password" name="password" placeholder="Enter Password" required value={formData.password} onChange={handleChange} />
        
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
