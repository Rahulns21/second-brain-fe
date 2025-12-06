export function useYoutubeUrl(url: string): string {
    const getYoutubeEmbedUrl = (url: string): string => {
        const youtubeEmbedUrl = "https://www.youtube.com/embed"

        try {
            const urlObj = new URL(url);
            let videoId = '';

            // Handle youtube.com/watch?v=VIDEO_ID
            if (urlObj.hostname.includes('youtube.com') && urlObj.searchParams.has('v')) {
                videoId = urlObj.searchParams.get('v') || '';
            }

            // Handle youtu.be/VIDEO_ID
            else if (urlObj.hostname.includes('youtu.be')) {
                videoId = urlObj.pathname.slice(1);
            }

            // Handle youtube.com/embed/VIDEO_ID (already embed format)
            else if (urlObj.pathname.includes('/embed/')) {
                return url;
            }

            return videoId ? `${youtubeEmbedUrl}/${videoId}` : url;
        } catch {
            return url;
        }
    }
    return getYoutubeEmbedUrl(url);
}