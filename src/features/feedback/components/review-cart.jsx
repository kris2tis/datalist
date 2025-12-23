const ReviewCard = ({ user:{name}, createdAt,  content, isPurchased, avatar, tags,  }) => {
  return (
    <div className="flex flex-col gap-4 bg-surface-dark rounded-2xl p-6 border border-surface-border hover:border-surface-border/80 transition-colors text-right">
      <div className="flex justify-between items-start flex-row-reverse">
        <div className="flex flex-col items-start gap-1">
          {/* Stars */}
          {/* <div className="flex text-yellow-400 text-[16px] flex-row-reverse">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`material-symbols-outlined ${i < rating ? 'fill' : ''}`}>star</span>
            ))}
          </div> */}
          <span className="text-[10px] text-text-secondary">{createdAt}</span>
        </div>
        <div className="flex items-center gap-3">
          {avatar ? (
            <div className="size-10 rounded-full bg-center bg-cover border border-surface-border" style={{ backgroundImage: `url(${avatar})` }}></div>
          ) : (
            <div className="size-10 rounded-full bg-blue-900/30 text-blue-400 flex items-center justify-center text-sm font-bold border border-blue-500/20">
              {name?.charAt(0)}
            </div>
          )}
          <div className="flex flex-col ">
            <span className="text-white text-sm font-bold">{name}</span>
            <span className="text-[11px] text-text-secondary">
              {isPurchased ? `خریداری شده در تاریخ ${createdAt}` : 'کاربر سایت'}
            </span>
          </div>
        </div>
        
      </div>

      <p className="text-text-secondary text-sm leading-7 text-right">{content}</p>
      
      {/* {tags && (
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-[10px] text-green-400">{tag}</span>
          ))}
        </div>
      )} */}

      {/* {reply && (
        <div className="mt-2 bg-background-dark rounded-xl p-4 border-r-2 border-primary relative text-right">
          <div className="flex items-center gap-2 mb-2 justify-end">
            <span className="text-xs font-bold text-white">پاسخ مدیر فروشگاه</span>
            <span className="material-symbols-outlined text-primary text-[18px]">support_agent</span>
          </div>
          <p className="text-xs text-text-secondary leading-6">{reply}</p>
        </div>
      )} */}

      {/* <div className="border-t border-surface-border pt-4 flex items-center justify-between flex-row-reverse">
        <div className="flex items-center gap-4 flex-row-reverse">
          <span className="text-xs text-text-secondary">آیا این نظر مفید بود؟</span>
          <button className="flex items-center gap-1 text-xs text-text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[16px]">thumb_up</span>
            <span>{likes}</span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ReviewCard;