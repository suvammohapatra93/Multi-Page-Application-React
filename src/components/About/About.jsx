import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <b><p className="mt-6 text-gray-600">
              React React is a popular JavaScript library developed by Facebook
              for building user interfaces, especially single-page applications.
              It allows developers to create reusable UI components that manage
              their state independently, which can be combined to build complex
              user interfaces. React emphasizes a declarative approach, where
              the UI is described in terms of how it should look at any given
              time, and React efficiently updates and renders the components
              when the data changes. Key Features of React: Component-Based
              Architecture: React divides the UI into small, reusable
              components, which can be nested, managed, and handled
              independently. Virtual DOM: React maintains a virtual
              representation of the real DOM, allowing it to efficiently update
              and render components by comparing the current DOM with the new
              one (a process called reconciliation). JSX (JavaScript XML): React
              uses JSX, a syntax extension for JavaScript, which allows
              developers to write HTML-like code directly within JavaScript.
              This makes it easier to create and visualize the UI structure.
              One-Way Data Binding: React enforces unidirectional data flow,
              where data is passed from parent to child components through
              props, making it easier to understand how data changes affect the
              UI. State Management: React components can manage their own state,
              which is an object that determines how the component renders and
              behaves. State changes trigger re-renders, keeping the UI in sync
              with the data. Hooks: React introduced Hooks in version 16.8,
              which allows developers to use state and other React features in
              functional components.
            </p>
            </b>
            <b>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
