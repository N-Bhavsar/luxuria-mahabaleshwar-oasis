
export function LocationMap() {
  return (
    <div>
      <h3 className="text-2xl font-serif font-medium mb-6">Our Location</h3>
      <div className="aspect-video w-full bg-card rounded-lg overflow-hidden shadow-sm border border-border">
        {/* Google Maps iframe would go here in production */}
        <div className="w-full h-full bg-accent flex items-center justify-center">
          <p className="text-center text-muted-foreground">
            Google Maps embed would appear here<br />
            <span className="text-sm">(API key required for production)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
