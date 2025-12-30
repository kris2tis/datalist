import Image from "next/image";

export default function Img({ src, className, alt }) {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} fill alt={alt} />
    </div>
  );
}
