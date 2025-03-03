import SkillLogo from '../../UI/Logos/SkillLogo';

function AboutSection() {
    return (
        <section className='relative' id='about'>
            <div className='bg-gray-blue-950 h-80 w-full -skew-y-3 absolute top-0'></div>
            <div className='bg-gray-blue-950 translate-y-28 z-40'>
                <div className='grid ml-5 mr-5 my-14 gap-10 md:grid-cols-2 md:mx-auto md:my-28 md:w-11/12 lg:w-9/12 lg:my-32 xl:w-8/12 xl:my-36'>
                    <div className='col-span-2 md:col-span-1 self-center'>
                        <h2 className='text-3xl font-bold text-gray-blue-600 mb-3 md:mb-5 md:text-4xl lg:text-5xl'>
                            About Me
                        </h2>
                        <p className='text-xl text-gray-blue-200 mb-7 md:mb-10 md:text-2xl'>
                            I started my journey in software unitentionally
                            while taking an intro to programming class while
                            preparing to enter a Mechanical Engineering program.
                            After that class I changed my major to Computer
                            Science and never looked back.
                        </p>
                    </div>
                    <div className='col-span-2 md:col-span-1 self-center'>
                        <h3 className='text-2xl font-bold text-gray-blue-600 mb-3 md:mb-5 md:text-3xl lg:text-4xl'>
                            {'<'}skills{'>'}
                        </h3>
                        <div className='grid grid-cols-2 gap-4'>
                            <SkillLogo
                                logoText={null}
                                logoHeight={40}
                                logoWidth={300}
                                logoViewBox='0 0 267 80'
                                logoPathElement={
                                    <>
                                        <mask
                                            id='mask0_1803_3458'
                                            maskUnits='userSpaceOnUse'
                                            x='0'
                                            y='0'
                                            width='267'
                                            height='80'
                                        >
                                            <path
                                                d='M267 0H0V79.3784H267V0Z'
                                                fill='white'
                                            ></path>
                                        </mask>
                                        <g mask='url(#mask0_1803_3458)'>
                                            <path
                                                d='M234.983 78.7547C234.292 78.7547 233.648 78.5695 233.05 78.2452L226.929 74.5871C226.008 74.0776 226.469 73.8924 226.745 73.7998C227.987 73.3829 228.217 73.2903 229.506 72.5495C229.644 72.4569 229.828 72.5033 229.966 72.5959L234.66 75.4206C234.844 75.5132 235.074 75.5132 235.212 75.4206L253.575 64.7235C253.758 64.6309 253.852 64.4457 253.852 64.2143V42.8665C253.852 42.6351 253.758 42.4499 253.575 42.3573L235.212 31.7067C235.028 31.614 234.798 31.614 234.66 31.7067L216.298 42.3573C216.114 42.4499 216.022 42.6813 216.022 42.8665V64.2143C216.022 64.3995 216.114 64.6309 216.298 64.7235L221.314 67.641C224.029 69.0301 225.732 67.4094 225.732 65.7886V44.7189C225.732 44.4411 225.962 44.1633 226.285 44.1633H228.632C228.908 44.1633 229.184 44.3947 229.184 44.7189V65.7886C229.184 69.447 227.205 71.577 223.753 71.577C222.695 71.577 221.867 71.577 219.519 70.4195L214.687 67.641C213.491 66.9463 212.754 65.6498 212.754 64.2604V42.913C212.754 41.5236 213.491 40.2271 214.687 39.5324L233.05 28.8356C234.2 28.1873 235.765 28.1873 236.915 28.8356L255.278 39.5324C256.474 40.2271 257.21 41.5236 257.21 42.913V64.2604C257.21 65.6498 256.474 66.9463 255.278 67.641L236.915 78.3378C236.363 78.5695 235.673 78.7547 234.983 78.7547Z'
                                                fill='#5FA04E'
                                            ></path>
                                            <path
                                                d='M240.69 64.075C232.635 64.075 230.978 60.3704 230.978 57.2215C230.978 56.9437 231.208 56.6658 231.53 56.6658H233.923C234.2 56.6658 234.43 56.8511 234.43 57.1289C234.798 59.5831 235.856 60.7873 240.735 60.7873C244.601 60.7873 246.258 59.9074 246.258 57.8236C246.258 56.6197 245.796 55.7398 239.768 55.1377C234.752 54.6282 231.622 53.5169 231.622 49.4881C231.622 45.7374 234.752 43.5145 239.998 43.5145C245.89 43.5145 248.789 45.5521 249.157 49.9976C249.157 50.1366 249.111 50.2754 249.02 50.4144C248.926 50.507 248.789 50.5997 248.649 50.5997H246.21C245.982 50.5997 245.751 50.4144 245.705 50.1828C245.152 47.6359 243.725 46.8025 239.952 46.8025C235.718 46.8025 235.212 48.2842 235.212 49.3955C235.212 50.7384 235.81 51.1553 241.517 51.8962C247.177 52.637 249.847 53.7021 249.847 57.6845C249.847 61.7595 246.487 64.075 240.69 64.075Z'
                                                fill='#5FA04E'
                                            ></path>
                                            <path
                                                d='M267.2 41.6621C267.2 43.6071 265.588 45.2279 263.654 45.2279C261.722 45.2279 260.111 43.6533 260.111 41.6621C260.111 39.6247 261.768 38.0966 263.654 38.0966C265.542 38.0966 267.2 39.6709 267.2 41.6621ZM260.664 41.6621C260.664 43.3293 261.999 44.6722 263.608 44.6722C265.266 44.6722 266.601 43.2829 266.601 41.6621C266.601 39.9951 265.266 38.6986 263.608 38.6986C262.045 38.6986 260.664 39.9951 260.664 41.6621ZM262.321 39.6709H263.702C264.162 39.6709 265.083 39.6709 265.083 40.736C265.083 41.4769 264.621 41.6159 264.344 41.7085C264.898 41.7547 264.943 42.1254 264.989 42.6346C265.035 42.9588 265.083 43.5145 265.174 43.6997H264.344C264.344 43.5145 264.207 42.4958 264.207 42.4494C264.162 42.218 264.07 42.1254 263.794 42.1254H263.103V43.7459H262.321V39.6709ZM263.057 41.4307H263.654C264.162 41.4307 264.253 41.0603 264.253 40.875C264.253 40.3194 263.885 40.3194 263.654 40.3194H263.012V41.4307H263.057Z'
                                                fill='#5FA04E'
                                            ></path>
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M43.6737 41.9539C43.6737 41.1204 43.2136 40.3334 42.4773 39.9165L23.0104 28.5712C22.6883 28.386 22.3201 28.2934 21.9519 28.2472C21.9059 28.2472 21.7679 28.2472 21.7679 28.2472C21.3997 28.2472 21.0315 28.386 20.7094 28.5712L1.19654 39.8701C0.460209 40.287 0 41.0743 0 41.9539L0.0460209 72.3315C0.0460209 72.7484 0.276126 73.165 0.644293 73.3502C1.01246 73.5819 1.47267 73.5819 1.79482 73.3502L13.3921 66.682C14.1284 66.2653 14.5886 65.4781 14.5886 64.6446V50.4282C14.5886 49.5947 15.0488 48.8074 15.7852 48.3908L20.7094 45.5197C21.0776 45.288 21.4917 45.1954 21.9059 45.1954C22.3201 45.1954 22.7343 45.288 23.0565 45.5197L27.9806 48.3908C28.7169 48.8074 29.1773 49.5947 29.1773 50.4282V64.6446C29.1773 65.4781 29.6375 66.2653 30.3738 66.682L41.8791 73.3502C42.2471 73.5819 42.7073 73.5819 43.0755 73.3502C43.4438 73.165 43.6737 72.7484 43.6737 72.3315V41.9539Z'
                                                fill='white'
                                            ></path>
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M137.465 0.138922C137.096 -0.0463072 136.636 -0.0463072 136.314 0.138922C135.946 0.370456 135.716 0.740915 135.716 1.15768V31.2573C135.716 31.5351 135.578 31.8129 135.301 31.9984C135.025 32.1372 134.749 32.1372 134.473 31.9984L129.595 29.1735C128.859 28.7569 127.984 28.7569 127.248 29.1735L107.735 40.5188C106.999 40.9357 106.539 41.7227 106.539 42.5562V65.2004C106.539 66.0342 106.999 66.8212 107.735 67.2381L127.248 78.5834C127.984 79 128.859 79 129.595 78.5834L149.108 67.2381C149.844 66.8212 150.304 66.0342 150.304 65.2004V8.75207C150.304 7.87222 149.844 7.085 149.108 6.66824L137.465 0.138922ZM135.67 57.7451C135.67 57.9765 135.578 58.1617 135.394 58.2544L128.72 62.1444C128.536 62.237 128.306 62.237 128.122 62.1444L121.449 58.2544C121.265 58.1617 121.173 57.9303 121.173 57.7451V49.9656C121.173 49.7339 121.265 49.5487 121.449 49.4561L128.122 45.5663C128.306 45.4737 128.536 45.4737 128.72 45.5663L135.394 49.4561C135.578 49.5487 135.67 49.7803 135.67 49.9656V57.7451Z'
                                                fill='white'
                                            ></path>
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M202.398 49.7801C203.135 49.3632 203.549 48.5762 203.549 47.7425V42.2319C203.549 41.3985 203.089 40.6112 202.398 40.1946L183.023 28.8957C182.287 28.4788 181.413 28.4788 180.676 28.8957L161.164 40.2407C160.427 40.6576 159.967 41.4449 159.967 42.2784V64.9226C159.967 65.7561 160.427 66.5434 161.164 66.96L180.538 78.0737C181.275 78.4905 182.149 78.4905 182.839 78.0737L194.575 71.4983C194.943 71.3131 195.173 70.8962 195.173 70.4793C195.173 70.0627 194.943 69.6459 194.575 69.4606L174.97 58.1153C174.602 57.8839 174.372 57.5135 174.372 57.0966V50.0117C174.372 49.5949 174.602 49.178 174.97 48.9928L181.091 45.4735C181.459 45.2421 181.919 45.2421 182.287 45.4735L188.408 48.9928C188.776 49.2245 189.006 49.5949 189.006 50.0117V55.5685C189.006 55.9853 189.236 56.4019 189.605 56.5872C189.973 56.8188 190.433 56.8188 190.801 56.5872L202.398 49.7801Z'
                                                fill='white'
                                            ></path>
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M181.551 48.7155C181.689 48.6228 181.874 48.6228 182.012 48.7155L185.739 50.8919C185.877 50.9845 185.969 51.1235 185.969 51.3087V55.6615C185.969 55.8468 185.877 55.9858 185.739 56.0784L182.012 58.2548C181.874 58.3474 181.689 58.3474 181.551 58.2548L177.824 56.0784C177.686 55.9858 177.594 55.8468 177.594 55.6615V51.3087C177.594 51.1235 177.686 50.9845 177.824 50.8919L181.551 48.7155Z'
                                                fill='#5FA04E'
                                            ></path>
                                            <path
                                                d='M76.3012 28.9882C75.5647 28.5716 74.6903 28.5716 73.954 28.9882L54.5792 40.241C53.8429 40.6578 53.4287 41.4449 53.4287 42.2786V64.83C53.4287 65.6637 53.8889 66.4507 54.5792 66.8676L73.954 78.1203C74.6903 78.5369 75.5647 78.5369 76.3012 78.1203L95.6758 66.8676C96.4123 66.4507 96.8263 65.6637 96.8263 64.83V42.2786C96.8263 41.4449 96.3662 40.6578 95.6758 40.241L76.3012 28.9882Z'
                                                fill='url(#paint0_linear_1803_3458)'
                                            ></path>
                                            <path
                                                d='M95.7221 40.241L76.2554 28.9882C76.0714 28.8956 75.8412 28.803 75.6572 28.7568L53.8433 66.3119C54.0273 66.5433 54.2575 66.7286 54.4874 66.8676L73.9544 78.1203C74.5067 78.4443 75.1508 78.5369 75.749 78.3517L96.2284 40.6578C96.0904 40.4726 95.9063 40.3336 95.7221 40.241Z'
                                                fill='url(#paint1_linear_1803_3458)'
                                            ></path>
                                            <path
                                                d='M95.7224 66.8669C96.2747 66.5427 96.6889 65.9871 96.8729 65.385L75.5651 28.7098C75.013 28.6172 74.4146 28.6633 73.9085 28.9876L54.5796 40.1939L75.427 78.4437C75.7031 78.3973 76.0255 78.3046 76.3016 78.1659L95.7224 66.8669Z'
                                                fill='url(#paint2_linear_1803_3458)'
                                            ></path>
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id='paint0_linear_1803_3458'
                                                x1='83.0183'
                                                y1='37.3689'
                                                x2='65.3246'
                                                y2='73.2407'
                                                gradientUnits='userSpaceOnUse'
                                            >
                                                <stop stop-color='#3F873F'></stop>
                                                <stop
                                                    offset='0.3296'
                                                    stop-color='#3F8B3D'
                                                ></stop>
                                                <stop
                                                    offset='0.6367'
                                                    stop-color='#3E9638'
                                                ></stop>
                                                <stop
                                                    offset='0.9341'
                                                    stop-color='#3DA92E'
                                                ></stop>
                                                <stop
                                                    offset='1'
                                                    stop-color='#3DAE2B'
                                                ></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id='paint1_linear_1803_3458'
                                                x1='72.1833'
                                                y1='56.1876'
                                                x2='121.552'
                                                y2='19.937'
                                                gradientUnits='userSpaceOnUse'
                                            >
                                                <stop
                                                    offset='0.1376'
                                                    stop-color='#3F873F'
                                                ></stop>
                                                <stop
                                                    offset='0.4016'
                                                    stop-color='#52A044'
                                                ></stop>
                                                <stop
                                                    offset='0.7129'
                                                    stop-color='#64B749'
                                                ></stop>
                                                <stop
                                                    offset='0.9081'
                                                    stop-color='#6ABF4B'
                                                ></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id='paint2_linear_1803_3458'
                                                x1='52.7188'
                                                y1='53.5463'
                                                x2='97.551'
                                                y2='53.5463'
                                                gradientUnits='userSpaceOnUse'
                                            >
                                                <stop
                                                    offset='0.0919165'
                                                    stop-color='#6ABF4B'
                                                ></stop>
                                                <stop
                                                    offset='0.2871'
                                                    stop-color='#64B749'
                                                ></stop>
                                                <stop
                                                    offset='0.5984'
                                                    stop-color='#52A044'
                                                ></stop>
                                                <stop
                                                    offset='0.8624'
                                                    stop-color='#3F873F'
                                                ></stop>
                                            </linearGradient>
                                        </defs>
                                    </>
                                }
                            />
                            <SkillLogo
                                logoText='ReactJS'
                                logoHeight={40}
                                logoWidth={42}
                                logoViewBox='0 0 256 228'
                                logoPathElement={
                                    <>
                                        <path
                                            fill='#00D8FF'
                                            d='M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z'
                                        ></path>
                                    </>
                                }
                            />
                            <SkillLogo
                                logoText='MySQL'
                                logoHeight={40}
                                logoWidth={42}
                                logoViewBox='0 0 128 128'
                                logoPathElement={
                                    <>
                                        <path
                                            fill='#00618A'
                                            d='M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z'
                                        />
                                    </>
                                }
                            />
                            <SkillLogo
                                logoText='Elasticsearch'
                                logoHeight={40}
                                logoWidth={42}
                                logoViewBox='0 0 32 32'
                                logoPathElement={
                                    <>
                                        <title>
                                            icon / product-logo / 32x32px /
                                            elasticsearch / color
                                        </title>
                                        <desc>Created with Sketch.</desc>
                                        <defs>
                                            <polygon
                                                id='path-1'
                                                points='0.6438 0.0005 27.479 0.0005 27.479 9.0005 0.6438 9.0005'
                                            ></polygon>
                                            <polygon
                                                id='path-3'
                                                points='0.6437 0.0004 27.479 0.0004 27.479 9 0.6437 9'
                                            ></polygon>
                                        </defs>
                                        <g
                                            id='icon-/-product-logo-/-32x32px-/-elasticsearch-/-color'
                                            stroke='none'
                                            stroke-width='1'
                                            fill='none'
                                            fill-rule='evenodd'
                                        >
                                            <g
                                                id='Group-9'
                                                transform='translate(1.000000, 0.000000)'
                                            >
                                                <path
                                                    d='M0,16.0004 C0,17.3844 0.194,18.7194 0.524,20.0004 L20,20.0004 C22.209,20.0004 24,18.2094 24,16.0004 C24,13.7904 22.209,12.0004 20,12.0004 L0.524,12.0004 C0.194,13.2804 0,14.6164 0,16.0004'
                                                    id='Fill-1'
                                                    fill='#343741'
                                                ></path>
                                                <g
                                                    id='Group-5'
                                                    transform='translate(1.000000, 0.000000)'
                                                >
                                                    <mask
                                                        id='mask-2'
                                                        fill='white'
                                                    >
                                                        <use href='#path-1'></use>
                                                    </mask>
                                                    <g id='Clip-4'></g>
                                                    <path
                                                        d='M25.9238,7.6615 C26.4828,7.1465 27.0028,6.5935 27.4798,6.0005 C24.5468,2.3455 20.0498,0.0005 14.9998,0.0005 C8.6788,0.0005 3.2388,3.6775 0.6438,9.0005 L22.5108,9.0005 C23.7768,9.0005 24.9938,8.5195 25.9238,7.6615'
                                                        id='Fill-3'
                                                        fill='#FEC514'
                                                        mask='url(#mask-2)'
                                                    ></path>
                                                </g>
                                                <g
                                                    id='Group-8'
                                                    transform='translate(1.000000, 23.000000)'
                                                >
                                                    <mask
                                                        id='mask-4'
                                                        fill='white'
                                                    >
                                                        <use href='#path-3'></use>
                                                    </mask>
                                                    <g id='Clip-7'></g>
                                                    <path
                                                        d='M22.5107,0.0004 L0.6437,0.0004 C3.2397,5.3224 8.6787,9.0004 14.9997,9.0004 C20.0497,9.0004 24.5467,6.6544 27.4797,3.0004 C27.0027,2.4064 26.4827,1.8534 25.9237,1.3384 C24.9937,0.4794 23.7767,0.0004 22.5107,0.0004'
                                                        id='Fill-6'
                                                        fill='#00BFB3'
                                                        mask='url(#mask-4)'
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </>
                                }
                            />
                            <SkillLogo
                                logoText='mongoDB'
                                logoHeight={40}
                                logoWidth={38}
                                logoViewBox='0 0 38 30'
                                logoPathElement={
                                    <>
                                        <path
                                            d='M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z'
                                            fill='#599636'
                                        />
                                        <path
                                            d='M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z'
                                            fill='#6cac48'
                                        />
                                        <path
                                            d='M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z'
                                            fill='#c2bfbf'
                                        />
                                    </>
                                }
                            />

                            <SkillLogo
                                logoText='Python'
                                logoHeight={40}
                                logoWidth={42}
                                logoViewBox='0 0 128 128'
                                logoPathElement={
                                    <>
                                        <linearGradient
                                            id='python-original-a'
                                            gradientUnits='userSpaceOnUse'
                                            x1='70.252'
                                            y1='1237.476'
                                            x2='170.659'
                                            y2='1151.089'
                                            gradientTransform='matrix(.563 0 0 -.568 -29.215 707.817)'
                                        >
                                            <stop
                                                offset='0'
                                                stopColor='#5A9FD4'
                                            />
                                            <stop
                                                offset='1'
                                                stopColor='#306998'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='python-original-b'
                                            gradientUnits='userSpaceOnUse'
                                            x1='209.474'
                                            y1='1098.811'
                                            x2='173.62'
                                            y2='1149.537'
                                            gradientTransform='matrix(.563 0 0 -.568 -29.215 707.817)'
                                        >
                                            <stop
                                                offset='0'
                                                stopColor='#FFD43B'
                                            />
                                            <stop
                                                offset='1'
                                                stopColor='#FFE873'
                                            />
                                        </linearGradient>
                                        <path
                                            fill='url(#python-original-a)'
                                            d='M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z'
                                            transform='translate(0 10.26)'
                                        />
                                        <path
                                            fill='url(#python-original-b)'
                                            d='M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z'
                                            transform='translate(0 10.26)'
                                        />
                                        <radialGradient
                                            id='python-original-c'
                                            cx='1825.678'
                                            cy='444.45'
                                            r='26.743'
                                            gradientTransform='matrix(0 -.24 -1.055 0 532.979 557.576)'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop
                                                offset='0'
                                                stopColor='#B8B8B8'
                                                stopOpacity='.498'
                                            />
                                            <stop
                                                offset='1'
                                                stopColor='#7F7F7F'
                                                stopOpacity='0'
                                            />
                                        </radialGradient>
                                        <path
                                            opacity='.444'
                                            fill='url(#python-original-c)'
                                            d='M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z'
                                        />
                                    </>
                                }
                            />
                        </div>
                        <h3 className='text-2xl font-bold text-gray-blue-600 mt-3 md:mt-5 md:text-4xl lg:text-4xl float-right'>
                            {'</'}skills{'>'}
                        </h3>
                    </div>
                </div>
            </div>
            <div className='bg-gray-blue-950 skew-y-3 relative -z-10 h-40 md:h-52 md:-translate-y-28 lg:h-72 lg:-translate-y-48 2xl:-translate-y-52'></div>
        </section>
    );
}

export default AboutSection;
