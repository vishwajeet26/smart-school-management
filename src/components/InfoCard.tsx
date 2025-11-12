import { Card, Badge } from "flowbite-react";
import { FaArrowLeft } from "react-icons/fa";

/**
 * A fully reusable information card component for entities like students, teachers, etc.
 *
 * Props:
 * - title: string (main title, e.g., "John Doe")
 * - subtitle: string (optional small title or label)
 * - image: string (optional avatar/photo URL)
 * - badge: string (optional badge text)
 * - fields: array of { label: string, value: string } — for key-value info rows
 * - onBack: function (optional handler for back button)
 * - gradient: string (optional Tailwind gradient classes)
 */
interface InfoCardProps {title: string;
  subtitle?: string;
  image?: string;
  badge?: string;
  fields?: { label: string; value: string }[];
  onBack?: () => void;
  gradient?: string;
}
export  const  InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  image,
  badge,
  fields = [],
  onBack,
  gradient = "from-blue-900 to-indigo-700",
}) => {
  return (
    <Card
      className={`w-full max-w-sm shadow-lg bg-gradient-to-br ${gradient} text-white`}
    >
      {/* Back button (optional) */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center text-sm text-white mb-2 hover:underline cursor-pointer"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      )}

      {/* Avatar / Image */}
      {image && (
        <img
          src={image}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
        />
      )}

      {/* Title + Badge */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-sm text-gray-200 mt-1">{subtitle}</p>}
        </div>
        {badge && (
          <Badge color="info" className="text-sm px-3 py-1">
            {badge}
          </Badge>
        )}
      </div>

      {/* Dynamic fields */}
      <div className="space-y-2 text-sm">
        {fields.map((f, i) => (
          <p key={i}>
            <strong>{f.label}:</strong> {f.value}
          </p>
        ))}
      </div>
    </Card>
  );
}
