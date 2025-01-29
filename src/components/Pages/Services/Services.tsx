import { ProjectSelector } from "./ProjectSelector";
import Logo from "../../../assets/logoD.png";
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center md:w-7/12 gap-8">
          <img src={Logo} alt="LOGO" />
          <h1 className="text-md md:text-3xl font-bold text-gray-900">
            Community Development Projects
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <ProjectSelector />
        </div>
      </main>

      {/* <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <p>Email: info@example.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Address</h3>
              <p>123 Community Street</p>
              <p>Dikome Balue</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="space-x-4">
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} Community Development Projects. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
