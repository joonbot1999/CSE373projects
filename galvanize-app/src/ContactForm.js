import React from 'react';
import './css/App.css';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xyylrlpr");
  if (state.succeeded) {
      return <p>Thanks for reaching out! Your message has been sent.</p>;
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
        <h3 className="mt-5">Contact the Organization </h3>
        <label class="form-label">
            Name
        </label>
        <input className="text-box"
            id="name"
            type="text"
            name="name"
            required
        />
        <label class="form-label" htmlFor="email">
            Email Address
        </label>
        <input className="text-box"
            id="email"
            type="email"
            name="email"
            required
        />
        <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
        />
        <label class="form-label">
          Message
        </label>
        <textarea className="text-box"
            id="message text-area"
            name="message"
            required
        />
        <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
        />
        <button id="form-submit" className="button" type="submit" disabled={state.submitting}>
            Submit
        </button>
    </form>
  );
}
