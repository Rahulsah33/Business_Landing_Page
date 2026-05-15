import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Mail,
  Menu,
  MousePointerClick,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  X,
  Zap,
} from "lucide-react";

import "./styles.css";
import heroImage from "./assets/photo.jpg";

const API_URL = import.meta.env.VITE_API_URL;

const metrics = [
  { value: "3.8x", label: "Average lead lift" },
  { value: "41%", label: "Lower acquisition cost" },
  { value: "12d", label: "Launch-ready timeline" },
];

const services = [
  {
    icon: Target,
    title: "Conversion Strategy",
    copy: "Modern high-converting funnels designed for serious lead generation.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Page Design",
    copy: "Responsive premium UI with animations and smooth interactions.",
  },
  {
    icon: BarChart3,
    title: "Lead Analytics",
    copy: "Track user engagement and optimize campaign performance.",
  },
];

const steps = [
  "Audit your business and audience",
  "Design a premium conversion-focused UI",
  "Launch and optimize lead generation",
];

const proof = [
  "Modern SaaS UI",
  "Premium responsive design",
  "Animated sections",
  "Backend API integration",
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "Growth sprint",
    message: "",
  });

  const [status, setStatus] = React.useState({
    type: "idle",
    message: "",
  });

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitLead = async (event) => {
    event.preventDefault();

    setStatus({
      type: "loading",
      message: "Sending your request...",
    });

    try {
      const response = await fetch(`${API_URL}/api/leads`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Please check your form.");
      }

      setStatus({
        type: "success",
        message: data.message || "Thanks! We will contact you soon.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        budget: "Growth sprint",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    }
  };

  return (
    <main>
      {/* NAVBAR */}

      <header className="nav">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <Zap size={18} />
          </span>
          Prime Site Technologies
        </a>

        <button
          className="icon-button nav-toggle"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#services">Services</a>

          <a href="#process">Process</a>

          <a href="#results">Results</a>

          <a className="nav-cta" href="#lead-form">
            Get Leads
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section className="hero" id="top">
        <div className="hero-media">
          <img src={heroImage} alt="" />
        </div>

        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={16} />
            Premium Websites for Modern Brands
          </div>

          <h1>Digital experiences that turn visitors into clients.</h1>

          <p>
            Modern animated business websites with smooth UI, responsive
            layouts, backend integrations, and conversion-focused sections.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#lead-form">
              Start Project
              <ArrowRight size={18} />
            </a>

            <a className="button secondary" href="#services">
              Explore Services
              <ChevronRight size={18} />
            </a>
          </div>

          <div className="metrics">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>

                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}

      <section className="trust-strip">
        {[
          [Rocket, "Fast launch systems"],
          [ShieldCheck, "Secure backend"],
          [TrendingUp, "High conversions"],
          [Clock3, "Optimized workflow"],
        ].map(([Icon, label]) => (
          <div className="trust-item" key={label}>
            <Icon size={19} />

            <span>{label}</span>
          </div>
        ))}
      </section>

      {/* SERVICES */}

      <section className="section" id="services">
        <div className="section-heading">
          <span className="kicker">What you get</span>

          <h2>A complete premium business website system.</h2>

          <p>
            Designed for startups, agencies, consultants, SaaS products, and
            modern businesses.
          </p>
        </div>

        <div className="service-grid">
          {services.map(({ icon: Icon, title, copy }) => (
            <article className="service-card" key={title}>
              <span className="service-icon">
                <Icon size={22} />
              </span>

              <h3>{title}</h3>

              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}

      <section className="split-section" id="process">
        <div>
          <span className="kicker">Growth Process</span>

          <h2>Designed to convert visitors into clients.</h2>

          <p>
            Every section is optimized for user experience, visual hierarchy,
            and conversion performance.
          </p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div className="timeline-item" key={step}>
              <span>{index + 1}</span>

              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}

      <section className="results" id="results">
        <div className="results-copy">
          <span className="kicker">Why choose us</span>

          <h2>Premium UI + strong backend architecture.</h2>

          <p>
            Built using React, Vite, Spring Boot APIs, responsive layouts,
            animations, and modern UI systems.
          </p>
        </div>

        <div className="proof-list">
          {proof.map((item) => (
            <div className="proof-item" key={item}>
              <Check size={18} />

              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}

      <section className="lead-section" id="lead-form">
        <div className="lead-copy">
          <span className="kicker">Book a Project</span>

          <h2>Let’s build your next premium website.</h2>

          <p>Submit your project details and we’ll contact you.</p>

          <div className="lead-badges">
            <span>
              <UsersRound size={16} />
              Qualified Leads
            </span>

            <span>
              <CircleDollarSign size={16} />
              Revenue Focused
            </span>

            <span>
              <ClipboardCheck size={16} />
              CRM Ready
            </span>
          </div>
        </div>

        <form className="lead-form" onSubmit={submitLead}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Your Name"
              required
            />
          </label>

          <label>
            Email
            <span className="input-wrap">
              <Mail size={17} />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="your@email.com"
                required
              />
            </span>
          </label>

          <label>
            Phone
            <span className="input-wrap">
              <Phone size={17} />

              <input
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="Phone Number"
              />
            </span>
          </label>

          <label>
            Company
            <input
              name="company"
              value={form.company}
              onChange={updateField}
              placeholder="Company Name"
            />
          </label>

          <label>
            Budget
            <select name="budget" value={form.budget} onChange={updateField}>
              <option>Growth sprint</option>

              <option>Full campaign</option>

              <option>Enterprise funnel</option>
            </select>
          </label>

          <label className="full">
            Project Goal
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Describe your project..."
            />
          </label>

          <button
            className="button primary full"
            type="submit"
            disabled={status.type === "loading"}
          >
            {status.type === "loading" ? "Sending..." : "Request Strategy Call"}

            <ArrowRight size={18} />
          </button>

          {status.message && (
            <p className={`form-status ${status.type}`}>{status.message}</p>
          )}
        </form>
      </section>

      {/* FOOTER */}

      {/* <footer>
        <span>© 2026 Prime Site Technologies</span>

        <span>Modern SaaS websites & premium UI systems.</span>
      </footer> */}

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Zap size={20} />
            </div>

            <div>
              <h3>Prime Site Technologies</h3>

              <p>
                Premium SaaS websites, landing pages, and modern business UI
                systems.
              </p>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>Company</h4>

              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Portfolio</a>
              <a href="#">Contact</a>
            </div>

            <div>
              <h4>Services</h4>

              <a href="#">Web Development</a>
              <a href="#">UI/UX Design</a>
              <a href="#">Landing Pages</a>
              <a href="#">API Integration</a>
            </div>

            <div>
              <h4>Social</h4>

              <a href="https://www.instagram.com">Instagram</a>
              <a href="https://www.linkedin.com">LinkedIn</a>
              <a href="https://twitter.com">Twitter</a>
              <a href="https://github.com">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            {" "}
            <a
              href="https://www.primesitedigital.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2026 Prime Site Technologies. All rights reserved.
            </a>
          </span>

          <span>Premium digital experiences for modern businesses.</span>
        </div>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
