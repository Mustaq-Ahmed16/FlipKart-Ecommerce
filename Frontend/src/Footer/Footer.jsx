import React from 'react'

const Footer = () => {
  return (
    <div className="footer-container w-full h-auto bg-black text-white mt-20 py-8">
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* ABOUT Section */}
        <div className="about">
          <p className="font-bold text-lg mb-3">ABOUT</p>
          <p><a href="#" className="hover:text-blue-400">Contact Us</a></p>
          <p><a href="#" className="hover:text-blue-400">Careers</a></p>
          <p><a href="#" className="hover:text-blue-400">Flipkart Stories</a></p>
          <p><a href="#" className="hover:text-blue-400">Press</a></p>
          <p><a href="#" className="hover:text-blue-400">Corporate Information</a></p>
        </div>

        {/* GROUP COMPANIES Section */}
        <div className="group-companies">
          <p className="font-bold text-lg mb-3">GROUP COMPANIES</p>
          <p><a href="#" className="hover:text-blue-400">Myntra</a></p>
          <p><a href="#" className="hover:text-blue-400">Cleartrip</a></p>
          <p><a href="#" className="hover:text-blue-400">Shopsy</a></p>
        </div>

        {/* HELP Section */}
        <div className="help">
          <p className="font-bold text-lg mb-3">HELP</p>
          <p><a href="#" className="hover:text-blue-400">Payments</a></p>
          <p><a href="#" className="hover:text-blue-400">Shipping</a></p>
          <p><a href="#" className="hover:text-blue-400">Cancellation & Returns</a></p>
          <p><a href="#" className="hover:text-blue-400">FAQ</a></p>
        </div>

        {/* CONSUMER POLICY Section */}
        <div className="consumer-policy">
          <p className="font-bold text-lg mb-3">CONSUMER POLICY</p>
          <p><a href="#" className="hover:text-blue-400">Cancellation & Returns</a></p>
          <p><a href="#" className="hover:text-blue-400">Terms of Use</a></p>
          <p><a href="#" className="hover:text-blue-400">Security</a></p>
          <p><a href="#" className="hover:text-blue-400">Privacy</a></p>
          <p><a href="#" className="hover:text-blue-400">Sitemap</a></p>
          <p><a href="#" className="hover:text-blue-400">Grievance Redressal</a></p>
          <p><a href="#" className="hover:text-blue-400">EPR</a></p>
          <p><a href="#" className="hover:text-blue-400">Compliance</a></p>
        </div>

        {/* MAIL US Section */}
        <div className="mail-us">
          <p className="font-bold text-lg mb-3">MAIL US</p>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
        </div>

        {/* OFFICE ADDRESS Section */}
        <div className="office-address">
          <p className="font-bold text-lg mb-3">REGISTERED OFFICE ADDRESS:</p>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103, Karnataka, India</p>
          <p>CIN: U51109KA2012PTC066107</p>
          <p>Telephone: <a href="tel:044-45614700" className="hover:text-blue-400">044-45614700</a> / <a href="tel:044-67415800" className="hover:text-blue-400">044-67415800</a></p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm">
        <p>© 2025 Flipkart Internet Private Limited</p>
      </div>
    </div>
  )
}

export default Footer
