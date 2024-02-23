import ReactMarkdown from "react-markdown";

export default function MovieDetailSection(movie: any) {
  return (
    <div className="space-y-6 pt-4 lg:col-span-9 lg:pt-0">
      <section aria-labelledby="applicant-information-title">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
            <h2
              id="applicant-information-title"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Movie Details
            </h2>
          </div>
          <article className="prose max-w-none px-4 py-5 text-base text-gray-900 sm:px-6">
            {/*<ReactMarkdown>{movie ?? "No detail found."}</ReactMarkdown>*/}
          </article>
        </div>
      </section>
    </div>
  );
}
