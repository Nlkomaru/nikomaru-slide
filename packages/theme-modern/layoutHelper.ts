import type { CSSProperties } from 'vue'

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
    if (url.startsWith('/'))
        return import.meta.env.BASE_URL + url.slice(1)
    return url
}

export function handleBackground(background?: string, dim = false, backgroundSize = 'cover'): CSSProperties {
    const isColor = background && (background[0] === '#' || background.startsWith('rgb'))

    const style = {
        background: isColor
            ? background
            : undefined,
        color: (background && !isColor)
            ? 'white'
            : undefined,
        backgroundImage: isColor
            ? undefined
            : background
                ? dim
                    ? `url(${resolveAssetUrl(background)}),linear-gradient(#00000, #ffffff)`
                    : `linear-gradient(to right, rgb(0 0 0 / 80%), rgb(0 0 0 / 20%)), url("${resolveAssetUrl(background)}")`
                : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize,
    }

    if (!style.background)
        delete style.background

    return style
}