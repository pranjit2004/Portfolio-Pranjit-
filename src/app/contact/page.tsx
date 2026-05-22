export default function Contact() {
  return (
    <main className="min-h-screen px-8 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          Contact Me
        </h1>

        <p className="text-lg text-gray-700 mb-10">
          Feel free to reach out for collaborations, freelance work,
          projects, or tech discussions.
        </p>

        <div className="space-y-6 text-lg">

          <div>
            <h2 className="font-semibold">Email</h2>
            <p className="text-gray-600">
              yourmail@example.com
            </p>
          </div>

          <div>
            <h2 className="font-semibold">LinkedIn</h2>
            <p className="text-gray-600">
              linkedin.com/in/yourprofile
            </p>
          </div>

          <div>
            <h2 className="font-semibold">GitHub</h2>
            <p className="text-gray-600">
              github.com/yourusername
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}