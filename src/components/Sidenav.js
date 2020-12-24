
function SideItem(props) {
    return (
        <li className="text-white text-xs mb-4 px-3 py-2 rounded-lg transition-all hover:bg-blue-400 cursor-pointer"><i className={`mr-2 fa ${props.icon}`}></i>{props.name}</li>
    );
}

function Sidenav() {
    return (
        <nav className="flex flex-col bg-blue-700 h-full pt-8 pb-12 px-3 w-48">

            <div className="flex flex-col transition-all hover:bg-blue-600 rounded-md self-start p-2">
                <div className="h-0.5 w-5 rounded-lg bg-white my-0.5"></div>
                <div className="h-0.5 w-5 rounded-lg bg-white my-0.5"></div>
                <div className="h-0.5 w-5 rounded-lg bg-white my-0.5"></div>
            </div>

            <ul className="list-none mt-7">
                <SideItem name="News" icon="fa-home" />
                <SideItem name="Topics" icon="fa-book" />
                <SideItem name="Questions" icon="fa-question-circle" />
                <SideItem name="Responses" icon="fa-undo" />
                <SideItem name="Favorites" icon="fa-heart" />
            </ul>

            <div className="bg-blue-100 relative text-center py-6 px-6 rounded-md self-center flex flex-col w-32 mt-14">

                <div className="h-11 absolute -mt-28 ml-4">
                    <svg width="69" height="145" viewBox="0 0 269 345" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M91.2623 51.4901C86.6544 46.0814 83.5356 39.4529 84.0568 32.0255C85.5583 10.625 115.349 15.3328 121.143 26.1339C126.938 36.9351 126.25 64.333 118.76 66.2635C115.774 67.0333 109.411 65.1475 102.935 61.2443L107 90H83L91.2623 51.4901Z" fill="#B28B67" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M131.776 11.1604C131.279 9.4135 129.942 7.91776 128.14 7.47401C127.704 7.36637 127.252 7.3229 126.803 7.34102C126.642 7.34746 126.596 7.39396 126.521 7.2812C126.465 7.1976 126.464 6.99336 126.441 6.89511C126.369 6.58961 126.28 6.28791 126.169 5.99403C125.792 4.99168 125.159 4.10458 124.395 3.3573C122.967 1.95928 121.037 0.994424 119.032 0.819868C117.934 0.724381 116.845 0.902681 115.807 1.25967C115.27 1.44447 114.749 1.67459 114.242 1.929C114.089 2.00558 113.594 2.38063 113.441 2.35633C113.271 2.32954 112.931 1.90884 112.793 1.80324C111.092 0.497879 108.991 -0.0153471 106.872 0.000348467C104.48 0.0180142 102.177 0.137537 100.182 1.59572C99.7593 1.90444 99.3571 2.24245 98.9741 2.59833C98.7725 2.78569 98.5772 2.98008 98.3909 3.18255C98.2785 3.3047 98.169 3.4296 98.0637 3.55786C97.8849 3.77556 97.9136 3.84708 97.6633 3.69518C96.7032 3.11189 95.5907 2.83908 94.4701 2.9768C93.8046 3.05862 93.1572 3.2584 92.5425 3.52135C92.3332 3.61086 91.8487 3.96792 91.6256 3.9714C91.4043 3.97481 90.9266 3.64383 90.6987 3.5597C89.4675 3.10519 88.1404 2.99315 86.8462 3.20317C85.5113 3.41989 84.2 3.95249 83.0689 4.68847C82.525 5.04251 82.0503 5.43477 81.6691 5.96119C81.5045 6.18848 81.3557 6.42891 81.1691 6.63965C81.0599 6.76305 80.8436 6.88966 80.785 7.04583C80.8201 6.95231 79.3251 6.37598 79.184 6.33913C78.4324 6.14284 77.6671 6.18264 76.9312 6.42484C75.5472 6.88027 74.3571 7.9016 73.3789 8.94874C72.8765 9.48659 72.4369 10.0811 72.0637 10.7145C71.8848 11.0179 71.7213 11.33 71.5717 11.6487C71.4991 11.8031 71.4511 11.9962 71.3556 12.1353C71.2324 12.3146 71.1497 12.318 70.9267 12.3961C69.794 12.7929 68.7616 13.4645 67.9753 14.3721C67.18 15.2902 66.664 16.4209 66.4476 17.6116C66.4349 17.6817 66.4273 17.9724 66.3862 18.0103C66.3299 18.0626 66.1022 18.0395 66.016 18.0496C65.7177 18.0846 65.4214 18.1367 65.1291 18.2059C64.5903 18.3335 64.0658 18.5211 63.5696 18.7666C61.6356 19.7235 60.2525 21.5175 59.5757 23.5361C58.8654 25.6546 58.878 28.0816 59.7269 30.1605C59.864 30.4963 60.0272 30.8222 60.2188 31.1305C60.3365 31.3198 60.3744 31.3203 60.298 31.5189C60.2129 31.7398 60.0573 31.9545 59.9562 32.1703C59.6262 32.8748 59.3956 33.6219 59.2499 34.3851C59.0108 35.6368 58.8924 36.9523 59.1282 38.2136C59.2377 38.7993 59.4284 39.3718 59.7195 39.8934C59.8679 40.1594 60.0415 40.4116 60.2376 40.645C60.3394 40.7661 60.4475 40.8818 60.5605 40.9927C60.6252 41.056 60.71 41.1114 60.765 41.1822C60.8992 41.3546 60.9274 41.2128 60.8582 41.4661C60.7614 41.8201 60.542 42.1694 60.4077 42.5139C60.2692 42.8689 60.1441 43.2288 60.0297 43.5923C59.7979 44.3282 59.6019 45.0774 59.4793 45.8395C59.244 47.3028 59.2853 48.8619 59.9775 50.2048C60.2734 50.7793 60.6979 51.2832 61.2128 51.6752C61.4649 51.8669 61.7378 52.0322 62.0242 52.168C62.1714 52.2378 62.3592 52.2678 62.4263 52.4101C62.4986 52.5631 62.3913 52.867 62.3669 53.038C62.1541 54.5263 62.0474 56.0889 62.4898 57.5473C62.8972 58.8907 63.7944 60.0767 64.9592 60.8619C67.2188 62.3852 70.2647 62.2993 72.6389 61.0798C73.2578 60.7619 73.8368 60.3672 74.3533 59.9017C75.6685 61.6722 78.375 61.6162 80.2972 61.1117C82.6921 60.4832 84.6137 58.818 85.7209 56.63C87.2348 58.473 90.412 57.875 91.4618 55.8757C91.7188 55.3864 91.8712 54.8471 91.9462 54.3014C91.9857 54.0144 91.9605 53.7249 91.9902 53.4402C92.028 53.0774 92.2703 52.7249 92.4096 52.374C92.6809 51.691 92.8493 50.9855 92.8566 50.2488C92.8604 49.8641 92.8116 49.4893 92.7751 49.1077C92.7422 48.7642 92.8374 48.4442 92.8915 48.1052C92.2773 48.2064 91.5291 48.0407 90.9504 47.8626C90.3825 47.6879 89.8507 47.2276 89.4499 46.8072C88.5192 45.8311 87.9507 44.5515 87.5619 43.2779C86.7084 40.4826 87.0582 37.129 89.8698 35.5949C91.1795 34.8802 95.1034 34.8826 96.6633 35.2358C98.3036 35.6071 100.163 39.2264 100.255 39.5666C100.311 39.7771 100.283 40.0377 100.476 40.178C100.901 40.4864 101.602 39.9511 101.916 39.6869C102.457 39.231 102.843 38.6243 103.177 38.0094C103.905 36.6696 104.492 35.2329 104.907 33.7663C105.227 32.6355 105.431 31.4695 105.849 30.3676C106.265 29.2712 106.92 28.2912 107.94 27.67C109.048 26.9943 110.319 26.6385 111.536 26.2138C112.743 25.793 113.929 25.2787 114.864 24.3857C115.07 24.1894 115.269 23.9807 115.435 23.7495C115.565 23.567 115.695 23.2177 115.894 23.102C116.203 22.9219 116.655 23.3901 116.923 23.56C118.243 24.3987 119.345 25.5683 120.233 26.846C121.117 28.1167 121.842 29.3395 122.431 30.7584C122.868 31.8108 123.141 33.1586 123.909 34.0211C124.252 34.4062 126.803 34.6392 127.629 34.303C128.455 33.9667 129.381 33.0937 129.658 32.5466C129.942 31.9866 130.01 31.3715 129.889 30.7584C129.817 30.3978 129.672 30.0609 129.592 29.7066C129.525 29.4091 129.464 29.1278 129.319 28.8552C129.045 28.3386 128.576 27.9673 128.01 27.8121C128.599 27.2694 129.086 26.6203 129.424 25.8946C129.774 25.1407 130.072 24.2238 130.156 23.3964C130.224 22.7243 130.119 22.028 129.751 21.4504C129.365 20.8445 128.681 20.4492 128.089 20.0713C128.993 19.3642 129.767 18.5044 130.402 17.5524C131.639 15.7011 132.404 13.3675 131.776 11.1604Z" fill="#191847" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 215H131C139.837 215 147 222.163 147 231V323C147 331.837 139.837 339 131 339H16C7.16344 339 0 331.837 0 323V231C0 222.163 7.16344 215 16 215ZM32 243C29.7909 243 28 244.791 28 247V307C28 309.209 29.7909 311 32 311H115C117.209 311 119 309.209 119 307V247C119 244.791 117.209 243 115 243H32Z" fill="#C5CFD6" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M218.509 335.66C205.696 307.302 196.43 282.608 192.711 269.58C186.343 247.273 181.498 227.643 180.273 220.313C177.353 202.832 202.735 201.814 206.09 210.502C211.168 223.651 220.033 266.853 230.685 332.107L218.509 335.66ZM69.8884 246.664C81.6441 242.017 122.812 227.475 142.667 223.361C148.373 222.179 153.903 221.081 159.102 220.088C174.556 217.138 182.563 245.017 167.679 247.16C130.612 252.494 78.0629 258.003 73.5658 258.622C67.2631 259.488 62.5003 249.584 69.8884 246.664Z" fill="#B28B67" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M168.587 212.416L105 180.047V173H112.562C174.08 188.676 205.515 198.722 206.869 203.138C206.883 203.185 206.897 203.233 206.909 203.281C206.94 203.321 206.97 203.362 207 203.403C219.192 220.17 226.493 302.027 228.889 308.156L205.528 311.641C196.591 278.503 168 255.418 168.759 215.729C168.554 214.565 168.503 213.461 168.587 212.416Z" fill="#1F28CF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M110.283 231.64C104.465 230.476 99.1073 229.436 94.5227 228.632C64.9093 223.438 56.2738 207.586 61.3795 173L115.942 173C124.855 175.56 171.174 194.985 195.207 205.316C211.113 212.154 206.099 236.804 197.091 243.219C197.042 243.613 196.88 243.88 196.591 244C148.137 264.083 109.805 253.545 97 256.912L91.0771 238.228L110.283 231.64Z" fill="#2B44FF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M73.9077 243.694C70.733 243.997 68.4794 244.474 67.1468 245.124C65.526 245.915 63.2926 247.338 60.4465 249.395C61.3635 251.275 69.6052 268.173 85.1714 300.088C90.169 299.282 92.1493 297.374 91.1123 294.367C90.0752 291.359 89.2388 288.849 88.603 286.835L87.6151 258.15C87.5961 257.598 87.1332 257.166 86.5813 257.185C86.5718 257.185 86.5624 257.185 86.553 257.186L82.1404 257.463C79.6329 255.434 77.9786 253.598 77.1774 251.955C76.5265 250.62 76.1665 248.514 76.0976 245.637L76.0976 245.637C76.0711 244.532 75.1545 243.659 74.0502 243.685C74.0026 243.686 73.9551 243.689 73.9077 243.694Z" fill="#E4E4E4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M212.678 330.402C211.559 333.388 211 335.623 211 337.106C211 338.909 211.3 341.54 211.901 345C213.993 345 232.794 345 268.303 345C269.769 340.155 268.923 337.539 265.765 337.152C262.607 336.766 259.984 336.417 257.895 336.106L231.68 324.419C231.176 324.194 230.584 324.421 230.359 324.925C230.356 324.934 230.352 324.942 230.348 324.951L228.663 329.039C225.74 330.403 223.364 331.085 221.537 331.085C220.052 331.085 218.001 330.485 215.384 329.286L215.384 329.285C214.38 328.825 213.193 329.266 212.733 330.27C212.713 330.313 212.695 330.357 212.678 330.402Z" fill="#E4E4E4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M163.044 157.123L191.372 184.758C199.615 188.273 206.368 192.156 211.633 196.404C212.817 197.832 214.105 200.568 208.535 199.344C202.965 198.12 197.051 197.082 196.004 198.894C194.957 200.705 198.042 203.481 196.107 205.852C194.817 207.432 190.479 202.405 183.093 190.77L153.636 173.403L163.044 157.123ZM37.3079 161.02L58.2053 161.102C45.3021 202.756 38.3363 224.857 37.3079 227.406C34.9939 233.14 39.8906 241.874 41.9846 246.567C35.1645 249.619 35.8912 238.317 27.2879 242.32C19.4352 245.973 13.4617 252.593 4.389 246.994C3.27357 246.306 2.05124 243.715 5.00454 241.69C12.3623 236.645 22.9653 227.815 24.3979 224.908C26.3515 220.945 30.6549 199.649 37.3079 161.02Z" fill="#B28B67" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M96.6949 73.3321L105.342 71.8489C120.23 109.039 146.222 142.831 183.318 173.225L155.286 207.281C118.194 164.005 95.3302 119.355 96.6949 73.3321Z" fill="#191847" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M59 182H136C118.161 138.625 109.241 101.779 109.241 71.4607L86.0142 68C67.7599 97.3584 62.6048 133.505 59 182Z" fill="#DDE3E9" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M85.5224 68.0164C85.5255 68.0109 85.5285 68.0055 85.5316 68L87.0478 68C88.862 68.0625 91.6253 68.175 95.3377 68.3377L100.95 84.3769C101.544 103.932 105.011 143.342 111.351 202.606H60.8761C61.0084 206.699 61.2266 210.83 61.5306 215H24C29.6139 151.664 50.1152 102.664 85.504 68L85.5224 68.0164V68.0164Z" fill="#2F3676" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M64.2102 150.233C65.6468 175.748 69.2433 193.337 75 203H60.8891C60.2713 184.643 61.3784 167.054 64.2102 150.233V150.233Z" fill="black" fill-opacity="0.1" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M72.1108 172L96.9999 160.429V172H72.1108Z" fill="white" fillOpacity="0.2" />
                    </svg>
                </div>

                <p style={{ fontSize: "9px" }} className="mt-6">
                    <span className="font-bold">Upgrade</span> <br />
                    your plan
                </p>

                <div className="bg-blue-700 w-6 mt-3 rounded-md hover:bg-blue-900 self-center flex p-2 flex-col">
                    <i class="fa fa-chevron-right self-center text-white" style={{ fontSize: "9px" }} aria-hidden="true"></i>
                </div>
            </div>
        </nav>
    );
}


export default Sidenav;