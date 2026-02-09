/**
 * Badge Animation Script
 * Animates the hero badge with "Machine Value $0" text
 * Features: pulsing, floating, and glowing effects
 */

class BadgeAnimator {
    constructor(badgeSelector) {
        this.badge = document.querySelector(badgeSelector);
        if (!this.badge) {
            console.warn('Badge element not found');
            return;
        }
        this.init();
    }

    init() {
        // Add animation styles dynamically
        this.addAnimationStyles();
        
        // Start the animation after a short delay
        setTimeout(() => {
            this.badge.classList.add('animated');
        }, 500);

        // Add hover interaction
        this.addHoverEffects();
    }

    addAnimationStyles() {
        // Create style element if it doesn't exist
        let styleEl = document.getElementById('badge-animation-styles');
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = 'badge-animation-styles';
            document.head.appendChild(styleEl);
        }

        styleEl.textContent = `
            @keyframes badgePulse {
                0%, 100% {
                    transform: scale(1) translateY(0px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 
                                0 0 0 0 rgba(139, 44, 44, 0.7);
                }
                25% {
                    transform: scale(1.05) translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 
                                0 0 0 10px rgba(139, 44, 44, 0.3);
                }
                50% {
                    transform: scale(1.08) translateY(-8px);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 
                                0 0 0 20px rgba(139, 44, 44, 0.1);
                }
                75% {
                    transform: scale(1.05) translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 
                                0 0 0 10px rgba(139, 44, 44, 0.3);
                }
            }

            @keyframes badgeGlow {
                0%, 100% {
                    filter: brightness(1);
                }
                50% {
                    filter: brightness(1.15);
                }
            }

            @keyframes badgeTextShine {
                0%, 100% {
                    opacity: 1;
                    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
                }
                50% {
                    opacity: 1;
                    text-shadow: 0 0 15px rgba(255, 255, 255, 0.6),
                                 0 0 25px rgba(255, 255, 255, 0.4);
                }
            }

            .hero-badge.animated {
                animation: badgePulse 3s ease-in-out infinite,
                           badgeGlow 2s ease-in-out infinite;
            }

            .hero-badge.animated .badge-value {
                animation: badgeTextShine 2s ease-in-out infinite;
            }

            .hero-badge.animated:hover {
                animation: none;
                transform: scale(1.1) translateY(-10px) rotate(-2deg);
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 
                            0 0 0 30px rgba(139, 44, 44, 0.2);
                transition: all 0.3s ease;
            }

            .hero-badge.animated .badge-title,
            .hero-badge.animated .badge-value {
                transition: transform 0.3s ease;
            }

            .hero-badge.animated:hover .badge-title {
                transform: translateY(-2px);
            }

            .hero-badge.animated:hover .badge-value {
                transform: scale(1.15);
                color: #fff;
            }
        `;
    }

    addHoverEffects() {
        this.badge.addEventListener('mouseenter', () => {
            this.badge.style.cursor = 'pointer';
        });

        this.badge.addEventListener('mouseleave', () => {
            this.badge.style.cursor = 'default';
        });

        // Optional: Add click interaction
        this.badge.addEventListener('click', () => {
            this.triggerExtraEffect();
        });
    }

    triggerExtraEffect() {
        // Add a special effect on click
        this.badge.style.animation = 'none';
        setTimeout(() => {
            this.badge.style.animation = '';
        }, 10);
        
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: translate(-50%, -50%);
            pointer-events: none;
            animation: rippleEffect 0.6s ease-out;
        `;
        
        // Add ripple animation
        const rippleStyle = document.createElement('style');
        rippleStyle.textContent = `
            @keyframes rippleEffect {
                to {
                    width: 300px;
                    height: 300px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyle);
        
        this.badge.style.position = 'relative';
        this.badge.style.overflow = 'hidden';
        this.badge.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Initialize the animator when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new BadgeAnimator('.hero-badge');
    });
} else {
    new BadgeAnimator('.hero-badge');
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BadgeAnimator;
}
