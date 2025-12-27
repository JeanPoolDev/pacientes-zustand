
interface Props {
  children: React.ReactNode;
}

export function ErrorsMessage({ children }: Props) {
  return (
    <div>
      <h1 className="font-semibold text-[#ff702e]">{children}</h1>
    </div>
  );
};