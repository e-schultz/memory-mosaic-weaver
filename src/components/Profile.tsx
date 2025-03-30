
import React from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import SigilSymbol from "./SigilSymbol";
import { Separator } from "@/components/ui/separator";

interface ProfileProps {
  uid: string;
  name: string;
  roles: string[];
  affiliations: string[];
  doctrinePosition: {
    walks_the_hall: boolean;
    function: string;
    annotation: string;
  };
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({ 
  uid, 
  name, 
  roles, 
  affiliations, 
  doctrinePosition,
  className 
}) => {
  return (
    <Card className={cn("doctrine-card overflow-hidden", className)}>
      <div className="mb-4">
        <span className="block text-xs text-psyche-accent/80 mb-1">{uid}</span>
        <h2 className="text-2xl font-semibold">{name}</h2>
      </div>
      
      <div className="mb-4">
        <h3 className="text-sm text-psyche-accent mb-2">Roles</h3>
        <div className="flex flex-wrap gap-2">
          {roles.map((role, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-psyche-medium/50 rounded text-xs border border-psyche-mute/30"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-sm text-psyche-accent mb-2">Affiliations</h3>
        <ul className="space-y-1">
          {affiliations.map((affiliation, index) => (
            <li key={index} className="text-sm text-psyche-ivory/80">• {affiliation}</li>
          ))}
        </ul>
      </div>
      
      <Separator className="bg-psyche-mute/30 my-4" />
      
      <div>
        <div className="flex items-center mb-2">
          <h3 className="text-sm text-psyche-accent">Doctrine Position</h3>
          <span className={cn(
            "ml-2 px-2 py-0.5 rounded text-xs",
            doctrinePosition.walks_the_hall 
              ? "bg-green-900/30 text-green-400" 
              : "bg-red-900/30 text-red-400"
          )}>
            {doctrinePosition.walks_the_hall ? "Walks the Hall" : "Does Not Walk the Hall"}
          </span>
        </div>
        
        <p className="text-sm mb-2">{doctrinePosition.function}</p>
        
        <blockquote className="border-l-2 border-psyche-accent pl-3 italic text-sm text-psyche-ivory/80">
          "{doctrinePosition.annotation}"
        </blockquote>
      </div>
    </Card>
  );
};

export default Profile;
