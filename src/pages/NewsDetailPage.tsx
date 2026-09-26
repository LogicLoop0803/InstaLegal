import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Newspaper, ArrowLeft, Bookmark, Share2, Check, Clock, User } from 'lucide-react';
import { getNewsById } from '../services/newsService';
import { useBookmarks } from '../context/BookmarkContext';

export const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = id ? getNewsById(id) : undefined;
  const { isBookmarked, toggle } = useBookmarks();
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <Newspaper className="w-16 h-16 text-gold-500 mx-auto opacity-50" />
        <h2 className="text-2xl font-bold text-slate-100">Article Not Found</h2>
        <button
          onClick={() => navigate('/news')}
          className="px-6 py-2.5 rounded-lg bg-gold-500 text-navy-950 font-bold text-sm"
        >
          Return to Legal News
        </button>
      </div>
    );
  }

  const bookmarked = isBookmarked('news', article.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <Link
        to="/news"
        className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Legal News</span>
      </Link>

      {/* Main Editorial Article */}
      <article className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl gold-border-glow space-y-6">
        {/* Header Metadata */}
        <div className="space-y-4 border-b border-gold-500/15 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
              {article.category}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggle('news', article.id)}
                className={`p-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-medium ${
                  bookmarked
                    ? 'bg-gold-500 text-navy-950 border-gold-400 font-bold'
                    : 'bg-navy-850 border-gold-500/20 text-slate-300'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-navy-950' : 'text-gold-400'}`} />
                <span>{bookmarked ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-300 hover:border-gold-400 text-xs flex items-center gap-1.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-gold-400" />}
                <span>{copied ? 'Copied' : 'Share'}</span>
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-slate-100 leading-tight">
            {article.headline}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <User className="w-4 h-4 text-gold-500" />
              <span>{article.author}</span>
            </div>
            <span>•</span>
            <div>{article.publishedDate}</div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {article.imageUrl && (
          <div className="w-full max-h-96 rounded-xl overflow-hidden bg-navy-850">
            <img
              src={article.imageUrl}
              alt={article.headline}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Summary Box */}
        <div className="p-4 rounded-xl bg-navy-850 border-l-4 border-gold-500 text-sm text-slate-200 italic leading-relaxed">
          "{article.summary}"
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none text-slate-200 leading-relaxed text-sm sm:text-base space-y-4 font-sans whitespace-pre-line">
          {article.fullContent}
        </div>

        {/* Source Footer */}
        <div className="pt-6 border-t border-gold-500/15 flex items-center justify-between text-xs text-slate-500">
          <span>Source: {article.source}</span>
          <span>Verified InstaLegal Legal Editorial</span>
        </div>
      </article>
    </div>
  );
};
