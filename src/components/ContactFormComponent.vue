<template>
  <div class="contact-form">
    <h1>CONTACT US</h1>
    <p>For any questions or inquiries, please fill out the form below:</p>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  </div>
</template>
<style scoped>
.contact-form {
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  overflow: auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  resize: vertical;
}

button[type="submit"] {
  background-color: #f5cf9b;
  color: #fff;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button[type="submit"]:hover {
  background-color: #f0b058;
}

@media (max-width: 768px) {
  .contact-form {
    width: 100%;
    margin: auto;
  }
}
</style>
