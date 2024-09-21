import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProgressBar() {
  // Using React state to simulate progress bar update
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const uploadInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(uploadInterval);
          return 100; // Ensure the progress is set to 100%
        }
        return prevProgress + 20;
      });
    }, 500);

    // Cleanup interval on component unmount
    return () => clearInterval(uploadInterval);
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (progress === 100) {
      router.push("/styling"); // Redirect to styling page
    }
  }, [progress, router]);


  return (
    <>
      <div className="w-full bg-white rounded-full h-4 ml-2 mr-2 ">
        <div
          className="bg-green-400 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
}
