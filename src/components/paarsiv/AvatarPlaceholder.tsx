import { TEAL } from "./theme";

type Props = {
  initials: string;
  size?: number;
  photoUrl?: string | null;
};

export function AvatarPlaceholder({ initials, size = 96, photoUrl = null }: Props) {
  const hasPhoto = Boolean(photoUrl);
  return (
    <div
      aria-label={`Profile placeholder for ${initials}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: hasPhoto ? "transparent" : TEAL,
        border: `3px solid ${TEAL}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {hasPhoto && photoUrl ? (
        <img
          src={photoUrl}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span
          style={{
            color: "white",
            fontWeight: 700,
            fontSize: size * 0.33,
            letterSpacing: "0.02em",
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
