<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kyle Woppert | Red Sky Realty</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
      background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') no-repeat center center fixed;
      background-size: cover;
    }
    header {
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 1.5rem;
      text-align: center;
    }
    nav {
      background: rgba(0, 0, 0, 0.8);
      padding: 1rem;
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    .container {
      max-width: 1000px;
      margin: 2rem auto;
      background: rgba(255, 255, 255, 0.95);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0,0,0,0.3);
    }
    .section {
      margin-bottom: 2rem;
    }
    .headshot {
      width: 150px;
      border-radius: 100px;
      margin-bottom: 1rem;
    }
    footer {
      background: rgba(0, 0, 0, 0.8);
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: 2rem;
    }
    iframe {
      width: 100%;
      height: 600px;
      border: none;
    }
    form label {
      display: block;
      margin-bottom: 0.5rem;
    }
    form input, form textarea {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    .agent-contact {
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0.5rem 0;
    }
  </style>
</head>
<body>
  <header>
    <h1>Kyle Woppert</h1>
    <p>SRQ International Realty | Red Sky Realty</p>
  </header>

  <nav>
    <a href="#about">About</a>
    <a href="#listings">Listings</a>
    <a href="#buyers">First-Time Buyers</a>
    <a href="#gallery">Gallery</a>
    <a href="#contact">Contact</a>
  </nav>

  <div class="container">
    <section class="section" id="about">
      <img src="/headshot.png" alt="Kyle Woppert Headshot" class="headshot" />
      <h2>About Me</h2>
      <p>I'm Kyle Woppert, a licensed Realtor® in Sarasota and Manatee County with SRQ International Realty. I specialize in identifying multiunit investment properties and finding dream homes for first-time homebuyers. With years of public record sales and expert local knowledge, I bring confidence and clarity to every transaction.</p>
    </section>

    <section class="section" id="listings">
      <h2>Active Listings</h2>
      <iframe src="https://stellar.mlsmatrix.com/Matrix/public/IDX.aspx?idx=593e6f28"></iframe>
    </section>

    <section class="section" id="buyers">
      <h2>First-Time Buyer Help</h2>
      <p>Whether you're just starting to dream or ready to buy, I guide you through every step of the process. I make home buying clear, stress-free, and even exciting. Let’s find your first dream home together.</p>
    </section>

    <section class="section" id="gallery">
      <h2>Property Gallery</h2>
      <p>(Photos coming soon!)</p>
    </section>

    <section class="section" id="contact">
      <h2>Contact Me</h2>
      <p class="agent-contact">📞 941-254-3288</p>
      <p class="agent-contact">📧 <a href="mailto:kylewoppert@gmail.com">kylewoppert@gmail.com</a></p>
      <form action="mailto:kylewoppert@gmail.com" method="post" enctype="text/plain">
        <label>Name:<input type="text" name="name" required /></label>
        <label>Email:<input type="email" name="email" required /></label>
        <label>Message:<textarea name="message" rows="5" required></textarea></label>
        <input type="submit" value="Send Message" />
      </form>
    </section>
  </div>

  <footer>
    <p>&copy; 2025 Kyle Woppert | Red Sky Realty</p>
  </footer>
</body>
</html>
