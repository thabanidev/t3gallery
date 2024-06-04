import Image from "next/image";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/7477d6a3-cbd1-4623-871f-a66040e4f723-g05stq.png",
  "https://utfs.io/f/0c8ffa62-28d7-4f29-a935-f60c230a3e74-e67bg2.jpg",
  "https://utfs.io/f/a897ba86-9a2d-42d6-910b-dd0e0416adf9-6a4me8.jpg",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="Image" width={500} height={500} />
          </div>
        ))}
      </div>
    </main>
  );
}
