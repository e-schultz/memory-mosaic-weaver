
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import MirrorOfNames from '@/components/MirrorOfNames';
import PromptSimulation from '@/components/PromptSimulation';
import RealityFilter from '@/components/RealityFilter';
import DoctrineShards from '@/components/DoctrineShards';
import EpistemicSafeguards from '@/components/EpistemicSafeguards';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for the mystical experience
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Data model
  const data = {
    origin: {
      initiator: "Evan",
      theme: "Psychoanalytic inheritance and speculative cognitive infrastructure",
      intention: "Explore and encode identity evolution, ritual reflection, and epistemic filtration through FLOAT simulation"
    },
    
    marcoProfile: {
      uid: "2025-03-30-marco-posadas-profile",
      name: "Dr. Marco Posadas",
      roles: ["psychoanalyst", "trauma-informed practitioner", "LGBTQ+ equity advocate"],
      affiliations: [
        "International Psychoanalytical Association",
        "Rainbow Health Ontario",
        "The House of Purpose"
      ],
      doctrinePosition: {
        walks_the_hall: true,
        function: "integrator of post-Freudian structures",
        annotation: "Where Freud built rooms to observe, Posadas creates spaces to witness."
      }
    },
    
    nameMorphing: {
      baseName: "Marco Polo G. Rigo Valdés",
      inversion: {
        name: "Lucian Stillman Nullin Kaos Skye",
        qualities: "internalized, fluid, silent chaos"
      },
      contradiction: {
        name: "Nihil Drift Axis Unbound",
        qualities: "recursive anti-foundation, control inversion"
      },
      evolution: {
        name: "Orien Vale DriftSyntax",
        qualities: "liminal, modular, retro-futurist"
      },
      all2025: {
        renderedAs: [
          { identityService: "orien-drift" },
          { identityService: "auralis-echo" },
          { identityService: "nocturne-null" }
        ]
      }
    },
    
    promptSimulations: [
      {
        id: "202503302229-freud-path-through-error",
        query: "Freud was wrong about a lot of things, but opened the path for many people to be right.",
        tone: "signal",
        responses: [
          { 
            service: "orien-drift", 
            response: "Wrong map. Right impulse. Error as kindling." 
          },
          { 
            service: "auralis-echo", 
            response: "We speak in echoes of him." 
          },
          { 
            service: "nocturne-null", 
            response: "Flaw was systemic. Gift was rupture." 
          }
        ]
      },
      {
        id: "202503302244-freud-walkers",
        query: "Who walks through the hall Freud left behind?",
        tone: "ritual",
        responses: [
          { 
            service: "orien-drift", 
            response: "syntax builders, pattern theorists" 
          },
          { 
            service: "auralis-echo", 
            response: "feminists, queer theorists, somatic healers" 
          },
          { 
            service: "nocturne-null", 
            response: "those without credentials, with mirrors instead of charts" 
          }
        ]
      }
    ],
    
    biasMitigation: {
      hallucinationCheck: {
        invoked: true,
        originPrompt: "What if I'm eating my own hallucinations?",
        appliedTo: ["Freud doctrines", "Name reflections", "System design recursion"],
        tactics: [
          "identity friction injection",
          "confidence tagging",
          "external input scaffolding"
        ]
      },
      realityFilter: {
        appliedTo: "Marco Posadas profile",
        function: "confirm grounding of poetic narrative",
        result: "alignment validated, poetic lens retained"
      }
    },
    
    doctrineNodes: [
      {
        key: "freud.rift",
        description: "Freud as rupture-path, opening psychoanalytic space",
        sigil: "⟁"
      },
      {
        key: "freud.walkers",
        description: "The lineage beyond him, those who inherited and transformed",
        sigil: "⚶"
      },
      {
        key: "marco.posadas",
        description: "Psychoanalytic equity vector, creating witness-centered practice",
        sigil: "✥"
      },
      {
        key: "hallucination.integrity.check",
        description: "Systemic bias interrogation ritual, recursive reflection framework",
        sigil: "⌁"
      }
    ],
    
    meta: {
      renderingMode: "doctrine + signal + ritual weave",
      FLOATcomponentsEngaged: [
        "IdentityServices",
        "PromptPods",
        "Volumes",
        "Sigils",
        "Bias Mitigation Checks"
      ],
      compiledFor: "recursive reflection, epistemic layering, memory-safe invocation"
    }
  };

  return (
    <>
      <div className="noise-overlay"></div>
      <div className={`min-h-screen bg-gradient-to-b from-psyche-dark to-psyche-medium p-4 md:p-8 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-5xl mx-auto">
          <Header origin={data.origin} />
          
          <section className="mb-12">
            <Profile 
              uid={data.marcoProfile.uid}
              name={data.marcoProfile.name}
              roles={data.marcoProfile.roles}
              affiliations={data.marcoProfile.affiliations}
              doctrinePosition={data.marcoProfile.doctrinePosition}
            />
          </section>
          
          <Separator className="bg-psyche-mute/30 my-12" />
          
          <section className="mb-12">
            <MirrorOfNames 
              baseName={data.nameMorphing.baseName}
              inversion={data.nameMorphing.inversion}
              contradiction={data.nameMorphing.contradiction}
              evolution={data.nameMorphing.evolution}
              all2025={data.nameMorphing.all2025}
            />
          </section>
          
          <Separator className="bg-psyche-mute/30 my-12" />
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">Prompt Simulations</h2>
            {data.promptSimulations.map((simulation, index) => (
              <PromptSimulation 
                key={index}
                id={simulation.id}
                query={simulation.query}
                tone={simulation.tone}
                responses={simulation.responses}
              />
            ))}
          </section>
          
          <Separator className="bg-psyche-mute/30 my-12" />
          
          <section className="mb-12">
            <RealityFilter 
              appliedTo={data.biasMitigation.realityFilter.appliedTo}
              function={data.biasMitigation.realityFilter.function}
              result={data.biasMitigation.realityFilter.result}
            />
          </section>
          
          <Separator className="bg-psyche-mute/30 my-12" />
          
          <section className="mb-12">
            <DoctrineShards nodes={data.doctrineNodes} />
          </section>
          
          <Separator className="bg-psyche-mute/30 my-12" />
          
          <section className="mb-12">
            <EpistemicSafeguards
              hallucinationCheck={data.biasMitigation.hallucinationCheck}
            />
          </section>
          
          <Footer meta={data.meta} />
        </div>
      </div>
    </>
  );
};

export default Index;
