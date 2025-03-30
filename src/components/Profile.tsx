
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
        <span className="block text-sm text-psyche-accent font-bold mb-1">{uid}</span>
        <h2 className="text-3xl font-bold">{name}</h2>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-psyche-accent mb-3">Roles</h3>
        <div className="flex flex-wrap gap-2">
          {roles.map((role, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-psyche-light rounded text-base border border-psyche-accent/30 text-psyche-ivory font-medium"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-psyche-accent mb-3">Affiliations</h3>
        <ul className="space-y-2">
          {affiliations.map((affiliation, index) => (
            <li key={index} className="text-base text-psyche-ivory flex items-start">
              <span className="text-psyche-gold mr-2">•</span> 
              {affiliation}
            </li>
          ))}
        </ul>
      </div>
      
      <Separator className="bg-psyche-mute/50 my-5" />
      
      <div>
        <div className="flex items-center mb-3">
          <h3 className="text-xl font-bold text-psyche-accent">Doctrine Position</h3>
          <span className={cn(
            "ml-3 px-3 py-1 rounded text-base font-bold",
            doctrinePosition.walks_the_hall 
              ? "bg-green-900/40 text-green-400" 
              : "bg-red-900/40 text-red-400"
          )}>
            {doctrinePosition.walks_the_hall ? "Walks the Hall" : "Does Not Walk the Hall"}
          </span>
        </div>
        
        <p className="text-base mb-3 text-psyche-ivory">{doctrinePosition.function}</p>
        
        <blockquote className="border-l-4 border-psyche-accent pl-4 italic text-base text-psyche-ivory">
          "{doctrinePosition.annotation}"
        </blockquote>
      </div>
    </Card>
  );
};

export default Profile;
