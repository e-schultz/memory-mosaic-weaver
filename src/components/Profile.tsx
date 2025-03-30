
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
      <div className="mb-5">
        <span className="block text-base text-psyche-accent font-bold mb-2">{uid}</span>
        <h2 className="text-4xl font-bold text-psyche-ivory">{name}</h2>
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-psyche-accent mb-4">Roles</h3>
        <div className="flex flex-wrap gap-3">
          {roles.map((role, index) => (
            <span 
              key={index} 
              className="px-4 py-2 bg-psyche-light rounded-md text-lg border-2 border-psyche-accent/30 text-psyche-ivory font-bold"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-psyche-accent mb-4">Affiliations</h3>
        <ul className="space-y-3">
          {affiliations.map((affiliation, index) => (
            <li key={index} className="text-xl text-psyche-ivory flex items-start font-medium">
              <span className="text-psyche-gold mr-2 text-2xl">•</span> 
              {affiliation}
            </li>
          ))}
        </ul>
      </div>
      
      <Separator className="bg-psyche-accent/30 my-6 h-0.5" />
      
      <div>
        <div className="flex items-center mb-4">
          <h3 className="text-2xl font-bold text-psyche-accent">Doctrine Position</h3>
          <span className={cn(
            "ml-3 px-4 py-1 rounded-md text-lg font-bold",
            doctrinePosition.walks_the_hall 
              ? "bg-green-900/60 text-green-300" 
              : "bg-red-900/60 text-red-300"
          )}>
            {doctrinePosition.walks_the_hall ? "Walks the Hall" : "Does Not Walk the Hall"}
          </span>
        </div>
        
        <p className="text-xl mb-4 text-psyche-ivory font-medium">{doctrinePosition.function}</p>
        
        <blockquote className="border-l-4 border-psyche-accent pl-5 italic text-xl text-psyche-gold">
          "{doctrinePosition.annotation}"
        </blockquote>
      </div>
    </Card>
  );
};

export default Profile;
