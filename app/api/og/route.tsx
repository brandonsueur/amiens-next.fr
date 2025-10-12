import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Icônes et couleurs par catégorie - Couleurs unies modernes
const categoryConfig = {
  Startup: {
    icon: "🚀",
    color: "#7AFCD0",
  },
  Business: {
    icon: "💼",
    color: "#FFB8D2",
  },
  Marketing: {
    icon: "📈",
    color: "#CDBBFF",
  },
  Tech: {
    icon: "⚡",
    color: "#F7FF9A",
  },
  Finance: {
    icon: "💰",
    color: "#7AFCD0",
  },
  Productivité: {
    icon: "⚙️",
    color: "#FFB8D2",
  },
  Leadership: {
    icon: "👑",
    color: "#F7FF9A",
  },
  Innovation: {
    icon: "💡",
    color: "#CDBBFF",
  },
  Entrepreneuriat: {
    icon: "🎯",
    color: "#7AFCD0",
  },
  Stratégie: {
    icon: "🎲",
    color: "#FFB8D2",
  },
  Coaching: {
    icon: "🎯",
    color: "#CDBBFF",
  },
  Formation: {
    icon: "📚",
    color: "#F7FF9A",
  },
  Événements: {
    icon: "🎪",
    color: "#FFB8D2",
  },
  default: {
    icon: "📰",
    color: "#7AFCD0",
  },
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Article de blog";
    const category = searchParams.get("category") || "Business";
    const readTime = searchParams.get("readTime") || "5 min";

    // Obtenir la configuration de la catégorie
    const config =
      categoryConfig[category as keyof typeof categoryConfig] ||
      categoryConfig.default;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: config.color,
            padding: "100px",
            color: "black",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {/* Catégorie en haut */}
          <div
            style={{
              fontSize: "24px",
              fontFamily: "Airbnb Cereal",
              fontWeight: "500",
              color: "black",
              marginBottom: "40px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {category}
          </div>

          {/* Titre principal centré */}
          <h1
            style={{
              fontSize: title.length > 50 ? "52px" : "74px",
              fontWeight: "700",
              lineHeight: "1.1",
              margin: "0",
              textAlign: "center",
              color: "black",
              maxWidth: "80%",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>

          {/* Temps de lecture en bas */}
          <div
            style={{
              fontSize: "30px",
              color: "black",
              marginTop: "40px",
              fontWeight: "400",
            }}
          >
            {readTime}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
