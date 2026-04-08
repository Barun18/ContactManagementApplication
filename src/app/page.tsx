
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <div className="text-center">
        <h2>Welcome to Contact Manager</h2>
        <p className="mt-2 text-lg text-gray-600">
          Manage yopur contact easily and efficiently
        </p>
        <Image
          src="/0014.png"
          alt="contact manager"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center">
        <p className="mt-2 text-lg text-gray-600">
          start managing your contact today
        </p>
      </div>
    </div>
  );
}
