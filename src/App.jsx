/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import news from "./api.json";

function App() {
  return (
    <>
      <div>
        {news.map((newy) => (
          <>
            <div className="pl-5 w-[70vw] bg-[#051519] flex justify-center rounded-2xl my-7  hover:shadow-[4.0px_4.0px_40.0px_rgba(255,255,255,0.25)] duration-500 border-slate-500 border-[0.4px] max-md:flex-col max-md:p-0 overflow-hidden">
              <div className="flex items-center justify-center w-2/12 py-8 max-md:w-full max-md:h-10/12 max-md:p-0 max-md:mt-3">
                <img
                  src="XES.svg"
                  className="w-9/12 max-md:h-1/12 max-md:w-2/12"
                />
              </div>
              <div className="grid content-between w-10/12 h-full gap-3 grid-row-3 max-md:w-full">
                <div className="flex justify-between w-full ml-4 h-[15%]">
                  <span className="flex mt-8 text-lg font-black topic">
                    {newy.topic}
                  </span>
                  <span className="mt-4 mr-8 text-xs date">
                    {newy.date} | {newy.hour}
                  </span>
                </div>
                <div className="w-full mt-2 mb-4 ml-4 h-[60%]">
                  <p className="mr-5 leading-5 text-start news font-primary">
                    {newy.news}
                  </p>
                </div>
                <div className="relative flex self-end justify-between w-full pl-4 mt-10 mb-2 h-[15%]">
                  <a className="absolute pb-0 mb-0 bottom-4 left-4 source"></a>
                  <span className="absolute mr-5 text-xl right-2 bottom-1 mt-7 kiko">
                    XES
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="pl-5 w-[70vw] bg-[#051519] flex justify-center rounded-2xl my-7  hover:shadow-[4.0px_4.0px_40.0px_rgba(255,255,255,0.25)] duration-500 border-slate-500 border-[0.4px] max-md:flex-col max-md:p-0">
        <div className="flex items-center justify-center w-2/12 py-8 max-md:w-full max-md:h-10/12 max-md:p-0 max-md:mt-3">
          <img src="XES.svg" className="w-9/12 max-md:h-1/12 max-md:w-2/12" />
        </div>
        <div className="grid content-between w-10/12 h-full gap-3 grid-row-3 max-md:w-full">
          <div className="flex justify-between w-full ml-4 h-[15%]">
            <span className="flex mt-8 text-lg font-black topic">topic</span>
            <span className="mt-4 mr-8 text-xs date">
              12/09/2023 | 01:24 pm
            </span>
          </div>
          <div className="w-full mt-2 mb-4 ml-4 h-[60%]">
            <p className="flex flex-col mr-5 leading-5 text-start news font-primary">
              <p className="mb-0.5 font-bold text-2xl">
                Welcome to XES - Your Gateway to Web3 News!
              </p>
              <br />
              <p className="my-1">
                🚀 Explore the Future of the Internet with Us! 🌐
              </p>
              <br />
              <p className="my-1">
                Are you ready to dive into the exciting world of Web3? Look no
                further! XES is your premier destination for all things related
                to Web3 technology, blockchain, cryptocurrencies, and the
                decentralized internet. Whether you're a seasoned crypto
                enthusiast or just starting your journey into the Web3 universe,
                you've come to the right place. <br />
                📰 Stay Informed: Our team of experts scours the web to bring
                you the latest news, trends, and insights in the Web3 space.
                Stay ahead of the curve with our in-depth articles, interviews,
                and analysis. <br />
                <p className="mt-5 mb-3">
                  🤝 Join the Community: Connect with like-minded individuals
                  who share your passion for Web3 technology. Engage in
                  discussions, share your thoughts, and expand your network
                  within the Web3 community. <br />
                </p>
                <p className="mb-2">
                  📣 Follow Us: Don't miss out on the latest updates and
                  discussions. Join us on our social media platforms: <br />
                </p>
                <p className="ml-5">
                  <p className="font-bold">🐦 Twitter:</p> Stay updated with
                  real-time news and insights. Follow us &#160;
                  <a
                    href="https://twitter.com/XESnews"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @XESnews
                  </a>
                  .
                  <br />
                  <br />
                  <p className="font-bold">📸 Instagram:</p> Get a visual
                  glimpse into the Web3 world through our Instagram feed. Follow
                  &#160;
                  <a
                    href="https://www.instagram.com/xesnews/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @xesnews
                  </a>
                  .
                  <br />
                  <br />
                  <p className="font-bold">✉️ Telegram:</p> Join our Telegram
                  channel for exclusive announcements and discussions. Find us
                  &#160;
                  <a
                    href="https://t.me/XESnews"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @XESnews
                  </a>
                  .
                  <br />
                  <br />
                  <p className="font-bold">🐈 Github:</p> XES is an open source.
                  Find us &#160;
                  <a
                    href="https://github.com/XESnews"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @XESnews
                  </a>
                  .
                  <br />
                </p>
                <p className="my-5">
                  At XES, we're committed to being your trusted source for Web3
                  news and knowledge. Join us on this incredible journey as we
                  explore the future of the internet together. Let's shape the
                  Web3 landscape, one article at a time! <br />
                </p>
                Welcome to XES - Where Web3 Comes to Life!
              </p>
            </p>
          </div>
          <div className="relative flex self-end justify-between w-full pl-4 mt-10 mb-2 h-[15%]">
            <a
              href="https://github.com/XESnews"
              target="_blank"
              className="absolute pb-0 mb-0 bottom-4 left-4 source"
            >
              source
            </a>
            <span className="absolute mr-5 text-xl right-2 bottom-1 mt-7 kiko">
              XES
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
