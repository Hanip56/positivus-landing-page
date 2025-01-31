import Image from "next/image";

const CaseStudies = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 mt-40">
      {/* header */}
      <header className="flex flex-col md:flex-row items-start md:items-center gap-10">
        <h2 className="inline-block bg-main p-3 rounded-lg">Case Studies</h2>
        <p className="max-w-xl">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </header>
      <main className="flex flex-col md:flex-row my-10 md:my-20 divide-y divide-x-0 md:divide-y-0 md:divide-x bg-black-100 p-[30px] sm:p-[60px] rounded-[45px] text-white">
        <div className="pb-8 md:pb-0 md:pr-16 space-y-5">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <button className="flex items-center gap-2 hover:opacity-80">
            <span className="text-main">Learn more</span>
            <Image
              src="/images/icon-arrow-up-right.svg"
              width={50}
              height={50}
              alt="Arrow up right"
            />
          </button>
        </div>
        <div className="py-8 md:py-0 md:px-16 space-y-5">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <button className="flex items-center gap-2 hover:opacity-80">
            <span className="text-main">Learn more</span>
            <Image
              src="/images/icon-arrow-up-right.svg"
              width={50}
              height={50}
              alt="Arrow up right"
            />
          </button>
        </div>
        <div className="pt-8 md:pt-0 md:pl-16 space-y-5">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <button className="flex items-center gap-2 hover:opacity-80">
            <span className="text-main">Learn more</span>
            <Image
              src="/images/icon-arrow-up-right.svg"
              width={50}
              height={50}
              alt="Arrow up right"
            />
          </button>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;
