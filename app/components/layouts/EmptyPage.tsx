import Image from "next/image";

interface EmptyPageProps {
  message: string;
}

export default function EmptyPage(props: EmptyPageProps) {
  const { message } = props;

  return (
    <div>
      <Image
        loading="lazy"
        alt="not found"
        src="/empty-box.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <h1 className=" text-[#6b7280]">{message}</h1>
    </div>
  );
}
