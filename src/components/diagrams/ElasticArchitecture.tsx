export function ElasticArchitecture() {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <svg
        viewBox="0 0 720 360"
        className="w-full h-auto"
        role="img"
        aria-label="Elastic Stack 4-node architecture diagram"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.22 0.07 255)" />
            <stop offset="100%" stopColor="oklch(0.45 0.12 220)" />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.13 195)" />
            <stop offset="100%" stopColor="oklch(0.86 0.19 130)" />
          </linearGradient>
          <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.45 0.04 240)" />
          </marker>
        </defs>

        {/* Agents */}
        <g>
          <rect x="20" y="140" width="140" height="80" rx="12" fill="url(#g2)" />
          <text x="90" y="175" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="14" fontWeight="700">
            Elastic Agents
          </text>
          <text x="90" y="195" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="11" opacity="0.9">
            (endpoints across network)
          </text>
        </g>

        {/* Fleet Server */}
        <g>
          <rect x="220" y="140" width="140" height="80" rx="12" fill="url(#g1)" />
          <text x="290" y="170" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="13" fontWeight="700">
            Node 4
          </text>
          <text x="290" y="190" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="12">
            Fleet Server
          </text>
          <text x="290" y="208" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="10" opacity="0.85">
            control plane
          </text>
        </g>

        {/* ES Cluster */}
        <g>
          <rect x="420" y="40" width="180" height="90" rx="12" fill="url(#g1)" />
          <text x="510" y="72" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="13" fontWeight="700">
            Node 1 — Elasticsearch
          </text>
          <text x="510" y="92" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="11" opacity="0.9">
            Primary · indexing & queries
          </text>
          <text x="510" y="110" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="10" opacity="0.8">
            192.168.100.41
          </text>

          <rect x="420" y="230" width="180" height="90" rx="12" fill="url(#g1)" />
          <text x="510" y="262" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="13" fontWeight="700">
            Node 2 — Elasticsearch
          </text>
          <text x="510" y="282" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="11" opacity="0.9">
            Secondary · replication
          </text>
          <text x="510" y="300" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="10" opacity="0.8">
            192.168.100.42
          </text>
        </g>

        {/* Kibana */}
        <g>
          <rect x="640" y="140" width="60" height="80" rx="12" fill="url(#g2)" />
          <text x="670" y="175" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="11" fontWeight="700">
            Node 3
          </text>
          <text x="670" y="195" textAnchor="middle" fill="white" fontFamily="Inter" fontSize="11">
            Kibana
          </text>
        </g>

        {/* Arrows */}
        <line x1="160" y1="180" x2="220" y2="180" stroke="oklch(0.45 0.04 240)" strokeWidth="2" markerEnd="url(#arr)" />
        <line x1="360" y1="170" x2="420" y2="90" stroke="oklch(0.45 0.04 240)" strokeWidth="2" markerEnd="url(#arr)" />
        <line x1="360" y1="190" x2="420" y2="270" stroke="oklch(0.45 0.04 240)" strokeWidth="2" markerEnd="url(#arr)" />
        <line x1="510" y1="130" x2="510" y2="230" stroke="oklch(0.45 0.04 240)" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="600" y1="85" x2="640" y2="160" stroke="oklch(0.45 0.04 240)" strokeWidth="2" markerEnd="url(#arr)" />
        <line x1="600" y1="275" x2="640" y2="200" stroke="oklch(0.45 0.04 240)" strokeWidth="2" markerEnd="url(#arr)" />
      </svg>
      <p className="mt-3 text-xs text-muted-foreground text-center">
        Agents → Fleet Server (Node 4) → Elasticsearch cluster (Nodes 1 & 2) ← Kibana (Node 3)
      </p>
    </div>
  );
}
