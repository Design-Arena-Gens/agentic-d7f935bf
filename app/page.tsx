'use client';

import { useState } from 'react';
import { Sparkles, TrendingUp, Zap, Clock, Hash, Eye } from 'lucide-react';

interface VideoIdea {
  title: string;
  hook: string;
  script: string;
  hashtags: string[];
  duration: string;
  viralScore: number;
  tips: string[];
}

export default function Home() {
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState<VideoIdea[]>([]);

  const generateIdeas = async () => {
    if (!niche.trim()) return;

    setLoading(true);

    // Simulate API call with realistic data generation
    await new Promise(resolve => setTimeout(resolve, 2000));

    const generatedIdeas: VideoIdea[] = [
      {
        title: `${niche}: Secret Hack Nobody Talks About 🤯`,
        hook: "Stop scrolling! This will change everything you know about " + niche.toLowerCase(),
        script: `[0-3s] Hook: "Stop scrolling! This will change everything you know about ${niche.toLowerCase()}"\n\n[3-8s] Problem: "Most people struggle with this because they don't know this ONE trick"\n\n[8-25s] Solution: "Here's what the pros do: [demonstrate the technique or share the insight]. This works because [brief explanation]"\n\n[25-35s] Proof: "I tried this myself and [share quick result]. Thousands have used this method"\n\n[35-45s] Action: "Save this video! Try it today and comment your results below. Follow for more ${niche} hacks"\n\n[45-50s] Final Hook: "Part 2 coming tomorrow - you won't believe what happens next"`,
        hashtags: ['#' + niche.replace(/\s+/g, ''), '#viral', '#trending', '#fyp', '#shorts', '#hack', '#secret', '#mustsee'],
        duration: '45-60s',
        viralScore: 94,
        tips: [
          'Start with a pattern interrupt in first 0.5 seconds',
          'Use jump cuts every 2-3 seconds to maintain attention',
          'Add captions with bold keywords for accessibility',
          'End with a cliffhanger to boost watch time',
          'Post between 2-4 PM or 7-9 PM for maximum reach'
        ]
      },
      {
        title: `The ${niche} Mistake You're Making Right Now ❌`,
        hook: "If you're doing THIS, you're failing at " + niche.toLowerCase(),
        script: `[0-3s] Hook: "If you're doing THIS, you're failing at ${niche.toLowerCase()}"\n\n[3-10s] Common Mistake: "95% of people make this mistake. Are you one of them? [show the mistake]"\n\n[10-28s] Why It's Wrong: "This doesn't work because [explain]. Instead, do THIS: [show correct method]"\n\n[28-40s] Transformation: "When you switch to this method, you'll see [benefit]. It's that simple"\n\n[40-50s] CTA: "Double tap if this helped! Follow @youraccount for daily ${niche} tips that actually work"\n\n[50-55s] Bonus: "Drop a '🔥' if you want me to show the advanced version"`,
        hashtags: ['#' + niche.replace(/\s+/g, ''), '#mistake', '#fix', '#tutorial', '#howto', '#shorts', '#viral', '#learnontiktok'],
        duration: '50-60s',
        viralScore: 91,
        tips: [
          'Show the mistake visually first to create relatability',
          'Use text overlays highlighting "MISTAKE" vs "CORRECT"',
          'Fast-paced editing with quick transitions',
          'Add trending audio in background at 10-15% volume',
          'Pin a comment asking viewers what mistake they made'
        ]
      },
      {
        title: `I Tried ${niche} For 30 Days - Results Shocked Me 😱`,
        hook: "Day 1 vs Day 30... I can't believe this happened",
        script: `[0-2s] Hook: "Day 1 vs Day 30... I can't believe this happened"\n\n[2-8s] Setup: "I challenged myself to [${niche} challenge]. Everyone said it was impossible"\n\n[8-22s] Journey: "Day 1: [show struggle]. Day 7: [small progress]. Day 15: [breakthrough moment]. Day 30: [reveal result]"\n\n[22-35s] Results: "Here's what changed: [list 3 specific outcomes]. The difference is INSANE"\n\n[35-48s] Takeaway: "The secret? [share one key insight]. Anyone can do this"\n\n[48-58s] CTA: "Trying this? Tag me in your results! Follow for more ${niche} transformations. Part 2 drops Friday"`,
        hashtags: ['#' + niche.replace(/\s+/g, ''), '#transformation', '#challenge', '#results', '#beforeafter', '#shorts', '#motivation', '#fyp'],
        duration: '55-60s',
        viralScore: 96,
        tips: [
          'Use side-by-side comparison visuals',
          'Add progress bar or day counter overlay',
          'Include energetic music that builds momentum',
          'Show genuine emotion and authenticity',
          'Create a series to keep viewers coming back'
        ]
      },
      {
        title: `${niche}: Pro vs Beginner (Which Are You?) 🆚`,
        hook: "Can you spot the difference? Most people can't...",
        script: `[0-3s] Hook: "Can you spot the difference? Most people can't..."\n\n[3-10s] Setup: "This is how a beginner does ${niche.toLowerCase()} [show basic way]"\n\n[10-18s] Contrast: "This is how a PRO does it [show advanced way]. See the difference?"\n\n[18-32s] Breakdown: "The pro method works better because: [3 quick reasons]. The results speak for themselves"\n\n[32-45s] Bridge: "Want to go from beginner to pro? Start with [ONE actionable tip]"\n\n[45-58s] CTA: "Comment 'PRO' if you knew this, 'BEGINNER' if you didn't. No shame - we all start somewhere! Follow for the complete guide"`,
        hashtags: ['#' + niche.replace(/\s+/g, ''), '#protips', '#beginner', '#vs', '#comparison', '#shorts', '#tutorial', '#skills'],
        duration: '55-60s',
        viralScore: 89,
        tips: [
          'Use split-screen for direct comparison',
          'Label clearly: "BEGINNER" vs "PRO"',
          'Encourage comments for algorithm boost',
          'Make viewers feel included, not judged',
          'Tease follow-up content with "full guide"'
        ]
      },
      {
        title: `This ${niche} Trend Is Actually Dangerous ⚠️`,
        hook: "Everyone's doing this... but nobody knows the truth",
        script: `[0-3s] Hook: "Everyone's doing this... but nobody knows the truth"\n\n[3-12s] The Trend: "You've seen this ${niche} trend everywhere [show it]. Looks cool, right? WRONG"\n\n[12-28s] The Problem: "Here's what they don't tell you: [explain the issue]. This can lead to [consequence]"\n\n[28-42s] The Solution: "Instead, do it THIS way [show safe/correct alternative]. Same results, zero risk"\n\n[42-55s] CTA: "Send this to someone before they make this mistake! Follow for ${niche} truth bombs that could save you"\n\n[55-60s] Close: "What other trends should I expose? Comment below"`,
        hashtags: ['#' + niche.replace(/\s+/g, ''), '#truth', '#exposed', '#warning', '#safety', '#shorts', '#psa', '#facts'],
        duration: '58-60s',
        viralScore: 92,
        tips: [
          'Use cautionary visual elements (⚠️ symbols)',
          'Balance concern with solution - don\'t just fear-monger',
          'Include text: "WAIT!" or "STOP" to grab attention',
          'Provide credible reasoning to build trust',
          'Encourage shares for "helping friends"'
        ]
      }
    ];

    setIdeas(generatedIdeas);
    setLoading(false);
  };

  const getViralScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-yellow-500';
    return 'text-orange-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-yellow-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              Viral Shorts Agent
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            AI-Powered YouTube Shorts Ideas That Actually Go Viral
          </p>
        </div>

        {/* Input Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <label className="block text-lg font-semibold mb-4">
              What's your niche or topic?
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && generateIdeas()}
                placeholder="e.g., Fitness, Cooking, Tech Reviews, Life Hacks..."
                className="flex-1 px-6 py-4 rounded-xl bg-white/20 border border-white/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-white placeholder-gray-400 text-lg"
              />
              <button
                onClick={generateIdeas}
                disabled={loading || !niche.trim()}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5 animate-pulse" />
                    Generating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Generate Ideas
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {ideas.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <TrendingUp className="w-8 h-8 text-pink-500" />
              Your Viral Video Ideas
            </h2>

            <div className="grid gap-8">
              {ideas.map((idea, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:border-purple-400/50 transition-all"
                >
                  {/* Title and Viral Score */}
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold flex-1 pr-4">
                      {idea.title}
                    </h3>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${getViralScoreColor(idea.viralScore)}`}>
                        {idea.viralScore}%
                      </div>
                      <div className="text-sm text-gray-400">Viral Score</div>
                    </div>
                  </div>

                  {/* Hook */}
                  <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="font-semibold text-yellow-400">Opening Hook</span>
                    </div>
                    <p className="text-lg">{idea.hook}</p>
                  </div>

                  {/* Script */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="font-semibold text-blue-400">Full Script ({idea.duration})</span>
                    </div>
                    <div className="bg-black/30 p-5 rounded-xl border border-white/10">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-200">
                        {idea.script}
                      </pre>
                    </div>
                  </div>

                  {/* Hashtags */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Hash className="w-5 h-5 text-purple-400" />
                      <span className="font-semibold text-purple-400">Optimized Hashtags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {idea.hashtags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm hover:bg-purple-500/30 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pro Tips */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Eye className="w-5 h-5 text-green-400" />
                      <span className="font-semibold text-green-400">Pro Tips for Maximum Views</span>
                    </div>
                    <ul className="space-y-2">
                      {idea.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span className="text-gray-300">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {ideas.length === 0 && !loading && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <Sparkles className="w-20 h-20 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Go Viral?</h3>
              <p className="text-gray-400 text-lg mb-8">
                Enter your niche above and let our AI agent generate high-converting YouTube Shorts ideas
                with complete scripts, hooks, and optimization tips.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <TrendingUp className="w-10 h-10 text-pink-500 mb-3" />
                  <h4 className="font-bold mb-2">Viral-Ready Scripts</h4>
                  <p className="text-sm text-gray-400">
                    Complete scripts with precise timing for maximum retention
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <Zap className="w-10 h-10 text-yellow-500 mb-3" />
                  <h4 className="font-bold mb-2">Attention Hooks</h4>
                  <p className="text-sm text-gray-400">
                    First 3-second hooks that stop the scroll instantly
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <Eye className="w-10 h-10 text-green-500 mb-3" />
                  <h4 className="font-bold mb-2">Pro Optimization</h4>
                  <p className="text-sm text-gray-400">
                    Expert tips on editing, posting times, and engagement tactics
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
