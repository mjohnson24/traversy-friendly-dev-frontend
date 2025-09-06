import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Contact Me" },
    { name: "description", content: "Custom Website Development" },
  ];
}

// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get("name") as string;
//   const email = formData.get("email") as string;
//   const subject = formData.get("subject") as string;
//   const message = formData.get("message") as string;
//   const errors: Record<string, string> = {};

//   if (!name) errors.name = "Name is required";
//   if (!email) {
//     errors.email = "Email is required";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     errors.email = "Invalid email address";
//   }
//   if (!subject) errors.subject = "Subject is required";
//   if (!message) errors.message = "Message is required";
//   console.log(errors);

//   if (Object.keys(errors).length > 0) {
//     return { errors };
//   }

//   const data = { name, email, subject, message };

//   return { message: "Form submitted successfully!", data };
// }

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
      <h2 className="text-3xl font-bold text black mb-8 text-center text-white">
        Contact Me
      </h2>

      <form
        action="https://formspree.io/f/mjkejyro"
        method="post"
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>

        <button className="w-full text-white py-2 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
