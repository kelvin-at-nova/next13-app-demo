import { Company } from "@/models/Company";
import { getBrand } from "@/preloaders/getBrand";

const SsrHeading = ({ name, image, acn }: Company) => {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <img src={image} height={32} width={32} />
      <h1>{name}</h1>
      <h2>ACN: {acn}</h2>
    </div>
  );
};
export default SsrHeading;
