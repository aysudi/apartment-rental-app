const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] py-14">
      <div className="container mx-auto w-[70%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="font-semibold text-lg">Quick access</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Sell your house on Funda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Check the value of your house
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Find an NVM real estate agent
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Follow the housing market: Funda Index
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Insights & inspiration</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  My Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  All about buying a house
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  All about selling a house
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  All about home improvement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Tips for searching Funda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  New features on Funda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">For agents</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Register with Funda in business
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Place and promote your objects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Promote your agency
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Widen your knowledge
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Log in to Funda desk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">More Funda</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  About Funda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Jobs at Funda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  For advertisers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Editorial policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          <p>
            © 2001-2025 Funda | Privacy | Terms of use | Cookies | Cookie
            preferences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
