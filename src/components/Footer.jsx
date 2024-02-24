import Link from "next/link";

const circleContact = (
  <svg
    className="animate-[spin_10s_linear_infinite] hover:animate-none hover:cursor-pointer w-32 h-32"
    width="241"
    height="241"
    viewBox="0 0 241 241"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M215.187 127.168L215.612 123.386C215.805 121.659 216.788 120.941 218.442 121.127L226.078 121.984C227.805 122.178 228.531 123.088 228.338 124.815L227.913 128.596C227.719 130.323 226.809 131.05 225.082 130.856L223.701 130.701L223.847 129.392L225.265 129.551C226.211 129.657 226.615 129.334 226.721 128.389L227.13 124.753C227.236 123.808 226.913 123.403 225.968 123.297L218.259 122.432C217.314 122.326 216.909 122.648 216.803 123.594L216.395 127.23C216.289 128.175 216.612 128.58 217.557 128.686L218.975 128.845L218.828 130.154L217.447 129.999C215.792 129.813 214.993 128.895 215.187 127.168Z"
      fill="white"
    />
    <path
      d="M213.735 138.546L214.688 134.617C215.098 132.928 216.092 132.322 217.781 132.732L225.248 134.544C226.937 134.954 227.543 135.948 227.133 137.637L226.18 141.566C225.77 143.255 224.776 143.861 223.087 143.451L215.62 141.639C213.931 141.229 213.325 140.235 213.735 138.546ZM224.973 135.833L217.435 134.004C216.511 133.779 216.069 134.049 215.845 134.973L214.926 138.76C214.701 139.684 214.971 140.126 215.895 140.351L223.433 142.18C224.358 142.404 224.799 142.135 225.024 141.21L225.943 137.423C226.167 136.499 225.898 136.057 224.973 135.833Z"
      fill="white"
    />
    <path
      d="M222.182 156.09L221.737 157.251L209.781 152.663L210.266 151.399L222.983 148.951L212.718 145.011L213.164 143.85L225.119 148.438L224.595 149.805L212.071 152.209L222.182 156.09Z"
      fill="white"
    />
    <path
      d="M215.688 168.231L217.472 164.725L207.135 159.464L207.733 158.29L218.069 163.552L219.854 160.046L220.93 160.594L216.764 168.778L215.688 168.231Z"
      fill="white"
    />
    <path
      d="M204.395 172.648L207.382 168.175L204.948 164.9L205.7 163.775L213.74 174.795L212.907 176.043L199.646 172.843L200.438 171.656L204.395 172.648ZM205.633 172.968L212.142 174.586L208.142 169.21L205.633 172.968Z"
      fill="white"
    />
    <path
      d="M195.377 178.936L197.844 176.039C198.971 174.716 200.187 174.67 201.454 175.75L207.304 180.732C208.627 181.858 208.72 183.019 207.593 184.342L205.126 187.239C203.999 188.562 202.839 188.655 201.516 187.528L200.457 186.627L201.311 185.624L202.398 186.549C203.122 187.166 203.638 187.125 204.254 186.401L206.627 183.615C207.244 182.891 207.202 182.375 206.478 181.758L200.572 176.729C199.848 176.112 199.332 176.153 198.716 176.878L196.343 179.663C195.727 180.388 195.768 180.903 196.492 181.52L197.579 182.445L196.725 183.448L195.666 182.547C194.399 181.467 194.25 180.259 195.377 178.936Z"
      fill="white"
    />
    <path
      d="M194.563 197.036L197.404 194.316L189.383 185.938L190.335 185.027L198.355 193.405L201.196 190.685L202.031 191.557L195.397 197.908L194.563 197.036Z"
      fill="white"
    />
    <path
      d="M182.303 208.771L176.552 200.292C175.577 198.854 175.796 197.711 177.234 196.735L180.414 194.579C181.852 193.603 182.996 193.822 183.971 195.261L189.722 203.739L188.632 204.479L182.861 195.97C182.327 195.182 181.818 195.085 181.031 195.619L177.973 197.693C177.185 198.227 177.088 198.735 177.622 199.523L183.393 208.032L182.303 208.771Z"
      fill="white"
    />
    <path
      d="M170.932 211.546L171.522 212.683C171.96 213.528 172.453 213.684 173.297 213.246L176.318 211.681C177.163 211.243 177.319 210.75 176.882 209.905L176.284 208.752C175.838 207.891 175.321 207.808 174.432 208.042L170.87 208.962C169.452 209.326 168.211 209.557 167.327 207.851L166.603 206.455C165.804 204.912 166.156 203.802 167.699 203.002L171.044 201.268C172.587 200.468 173.697 200.82 174.497 202.363L175.095 203.516L173.925 204.122L173.277 202.872C172.839 202.027 172.346 201.871 171.501 202.308L168.286 203.975C167.441 204.413 167.285 204.906 167.722 205.751L168.429 207.115C168.876 207.976 169.392 208.059 170.281 207.825L173.843 206.905C175.262 206.541 176.502 206.31 177.386 208.016L178 209.201C178.8 210.744 178.448 211.854 176.905 212.654L173.754 214.287C172.211 215.087 171.102 214.735 170.302 213.192L169.763 212.152L170.932 211.546Z"
      fill="white"
    />
    <path
      d="M143.999 222.074C143.36 222.186 142.693 222.124 141.999 221.889C141.3 221.66 140.727 221.256 140.281 220.675C139.83 220.101 139.55 219.503 139.441 218.881C139.254 217.807 139.472 216.826 140.096 215.937C140.721 215.048 141.57 214.509 142.643 214.322C143.711 214.135 144.689 214.354 145.578 214.978C146.467 215.602 147.006 216.451 147.193 217.525C147.304 218.158 147.253 218.814 147.039 219.492C146.82 220.178 146.427 220.748 145.86 221.204C145.288 221.667 144.668 221.957 143.999 222.074Z"
      fill="white"
    />
    <path
      d="M111.357 215.179L115.128 215.691C116.85 215.924 117.545 216.923 117.321 218.573L116.288 226.187C116.055 227.909 115.128 228.614 113.406 228.381L109.635 227.869C107.913 227.635 107.208 226.709 107.442 224.987L107.629 223.609L108.934 223.786L108.742 225.2C108.614 226.143 108.928 226.554 109.87 226.682L113.496 227.174C114.439 227.302 114.85 226.989 114.978 226.046L116.021 218.36C116.149 217.417 115.835 217.005 114.893 216.877L111.267 216.386C110.324 216.258 109.913 216.571 109.785 217.514L109.593 218.928L108.288 218.751L108.475 217.373C108.698 215.723 109.635 214.946 111.357 215.179Z"
      fill="white"
    />
    <path
      d="M100.252 213.504L104.159 214.547C105.838 214.995 106.421 216.003 105.973 217.682L103.991 225.105C103.543 226.785 102.535 227.368 100.856 226.919L96.9497 225.877C95.2706 225.429 94.6875 224.421 95.1357 222.742L97.1173 215.318C97.5655 213.639 98.5732 213.056 100.252 213.504ZM102.709 224.801L104.709 217.307C104.955 216.388 104.696 215.94 103.777 215.694L100.012 214.689C99.0925 214.444 98.6447 214.703 98.3993 215.622L96.3989 223.117C96.1536 224.036 96.4127 224.484 97.3318 224.729L101.097 225.734C102.016 225.979 102.464 225.72 102.709 224.801Z"
      fill="white"
    />
    <path
      d="M82.3918 221.494L81.2407 221.022L86.0967 209.172L87.3494 209.686L89.5112 222.454L93.6804 212.28L94.8315 212.752L89.9755 224.602L88.6213 224.047L86.4986 211.472L82.3918 221.494Z"
      fill="white"
    />
    <path
      d="M70.4948 214.757L73.9596 216.618L79.449 206.401L80.6093 207.024L75.1199 217.241L78.5848 219.103L78.0133 220.167L69.9233 215.82L70.4948 214.757Z"
      fill="white"
    />
    <path
      d="M66.3976 203.404L70.8041 206.488L74.131 204.127L75.2402 204.903L64.0456 212.699L62.8165 211.839L66.3071 198.651L67.4762 199.47L66.3976 203.404ZM66.05 204.634L64.2897 211.106L69.7521 207.225L66.05 204.634Z"
      fill="white"
    />
    <path
      d="M60.334 194.265L63.1765 196.795C64.4747 197.95 64.4938 199.167 63.387 200.411L58.2788 206.15C57.1233 207.448 55.9611 207.516 54.6628 206.361L51.8203 203.831C50.5221 202.676 50.4544 201.513 51.6098 200.215L52.5342 199.176L53.5181 200.052L52.5694 201.118C51.937 201.829 51.9671 202.345 52.6777 202.978L55.4109 205.41C56.1215 206.043 56.6381 206.012 57.2705 205.302L62.4274 199.508C63.0598 198.797 63.0297 198.28 62.3191 197.648L59.5859 195.215C58.8753 194.583 58.3587 194.613 57.7263 195.324L56.7776 196.39L55.7937 195.514L56.718 194.475C57.8248 193.232 59.0357 193.109 60.334 194.265Z"
      fill="white"
    />
    <path
      d="M42.2607 193.066L44.918 195.966L53.4691 188.129L54.359 189.101L45.8079 196.937L48.4653 199.836L47.5751 200.652L41.3705 193.881L42.2607 193.066Z"
      fill="white"
    />
    <path
      d="M30.8482 180.631L39.4511 175.068C40.9106 174.125 42.0489 174.369 42.9926 175.828L45.0787 179.055C46.0224 180.514 45.7781 181.652 44.3186 182.596L35.7157 188.159L35.0005 187.053L43.6341 181.47C44.433 180.953 44.5416 180.448 44.025 179.649L42.0184 176.546C41.5019 175.747 40.9959 175.638 40.1971 176.155L31.5634 181.737L30.8482 180.631Z"
      fill="white"
    />
    <path
      d="M28.311 169.205L27.1612 169.769C26.3071 170.188 26.1397 170.678 26.5586 171.532L28.057 174.587C28.4759 175.441 28.9655 175.608 29.8196 175.189L30.9858 174.617C31.8564 174.19 31.9503 173.676 31.7362 172.782L30.8964 169.2C30.5637 167.774 30.3606 166.529 32.0852 165.683L33.4978 164.99C35.0582 164.225 36.1598 164.602 36.9251 166.162L38.5846 169.546C39.3499 171.106 38.9733 172.208 37.4129 172.973L36.2467 173.545L35.6667 172.362L36.9314 171.742C37.7855 171.323 37.9529 170.834 37.534 169.979L35.939 166.727C35.5201 165.873 35.0304 165.706 34.1763 166.125L32.7966 166.801C31.9261 167.228 31.8321 167.743 32.0462 168.636L32.886 172.218C33.2187 173.644 33.4219 174.89 31.6972 175.735L30.4982 176.324C28.9378 177.089 27.8362 176.712 27.0709 175.152L25.5081 171.965C24.7428 170.405 25.1194 169.303 26.6798 168.538L27.731 168.022L28.311 169.205Z"
      fill="white"
    />
    <path
      d="M18.4045 142.257C18.3049 141.616 18.3794 140.95 18.6279 140.261C18.8696 139.566 19.2852 139.002 19.8745 138.567C20.4571 138.127 21.0602 137.858 21.684 137.761C22.7609 137.594 23.7378 137.831 24.6148 138.472C25.4918 139.114 26.0139 139.973 26.1811 141.05C26.3473 142.121 26.1098 143.095 25.4686 143.972C24.8273 144.849 23.9682 145.371 22.8913 145.538C22.2558 145.637 21.601 145.573 20.927 145.346C20.2462 145.114 19.6833 144.71 19.2383 144.134C18.7866 143.554 18.5086 142.928 18.4045 142.257Z"
      fill="white"
    />
    <path
      d="M25.9143 109.631L25.3161 113.389C25.0429 115.105 24.0282 115.777 22.3841 115.516L14.7961 114.308C13.0797 114.035 12.3961 113.092 12.6693 111.376L13.2675 107.618C13.5407 105.902 14.4831 105.218 16.1995 105.491L17.5726 105.71L17.3655 107.011L15.9563 106.786C15.0168 106.637 14.598 106.94 14.4484 107.88L13.8733 111.493C13.7237 112.433 14.0275 112.852 14.967 113.001L22.6273 114.221C23.5668 114.37 23.9857 114.066 24.1352 113.127L24.7104 109.513C24.8599 108.574 24.5561 108.155 23.6166 108.006L22.2074 107.781L22.4145 106.48L23.7875 106.699C25.4316 106.961 26.1875 107.915 25.9143 109.631Z"
      fill="white"
    />
    <path
      d="M27.7633 98.8131L26.6467 102.699C26.1668 104.369 25.1482 104.933 23.4778 104.453L16.0931 102.331C14.4227 101.851 13.8588 100.833 14.3388 99.1624L15.4553 95.2766C15.9352 93.6062 16.9538 93.0424 18.6242 93.5223L26.009 95.6442C27.6793 96.1242 28.2432 97.1428 27.7633 98.8131ZM16.4216 101.055L23.8768 103.197C24.7911 103.46 25.2438 103.209 25.5065 102.295L26.5826 98.55C26.8453 97.6357 26.5947 97.183 25.6804 96.9203L18.2253 94.7782C17.311 94.5155 16.8583 94.7661 16.5956 95.6804L15.5194 99.4255C15.2567 100.34 15.5073 100.793 16.4216 101.055Z"
      fill="white"
    />
    <path
      d="M20.1112 80.7361L20.6086 79.5959L32.3463 84.7162L31.8051 85.9571L18.9916 87.8322L29.0693 92.2284L28.5719 93.3686L16.8342 88.2483L17.4193 86.9069L30.038 85.0665L20.1112 80.7361Z"
      fill="white"
    />
    <path
      d="M27.1158 68.9002L25.1779 72.323L35.2711 78.0373L34.6222 79.1835L24.529 73.4692L22.5911 76.892L21.5404 76.2971L26.065 68.3053L27.1158 68.9002Z"
      fill="white"
    />
    <path
      d="M38.612 64.9213L35.4323 69.2592L37.7196 72.6371L36.9193 73.7289L29.3705 62.3661L30.2574 61.1562L43.3653 64.9351L42.5217 66.0859L38.612 64.9213ZM37.3895 64.5468L30.9579 62.6451L34.718 68.1913L37.3895 64.5468Z"
      fill="white"
    />
    <path
      d="M47.9315 58.9738L45.3403 61.7604C44.1569 63.0332 42.9398 63.0256 41.7206 61.892L36.0937 56.6598C34.821 55.4764 34.7787 54.3129 35.9622 53.0401L38.5533 50.2535C39.7368 48.9807 40.9003 48.9384 42.173 50.1219L43.1912 51.0687L42.2943 52.0333L41.2493 51.0616C40.5526 50.4138 40.0355 50.4326 39.3877 51.1293L36.8962 53.8088C36.2484 54.5054 36.2672 55.0225 36.9639 55.6703L42.6444 60.9523C43.341 61.6001 43.8581 61.5813 44.5059 60.8846L46.9974 58.2051C47.6452 57.5085 47.6264 56.9914 46.9298 56.3436L45.8848 55.3719L46.7817 54.4073L47.7999 55.3541C49.0191 56.4877 49.115 57.701 47.9315 58.9738Z"
      fill="white"
    />
    <path
      d="M49.48 40.9631L46.5228 43.5566L54.1706 52.2766L53.1803 53.1451L45.5326 44.4251L42.5755 47.0186L41.7793 46.1108L48.6838 40.0553L49.48 40.9631Z"
      fill="white"
    />
    <path
      d="M61.8297 30.0029L67.2017 38.7263C68.113 40.2061 67.8437 41.3388 66.3639 42.2501L63.0926 44.2646C61.6128 45.176 60.4801 44.9067 59.5688 43.4268L54.1967 34.7035L55.3183 34.0128L60.7095 42.7673C61.2084 43.5773 61.7118 43.697 62.5218 43.1982L65.6684 41.2604C66.4785 40.7615 66.5982 40.2581 66.0993 39.4481L60.7081 30.6936L61.8297 30.0029Z"
      fill="white"
    />
    <path
      d="M73.4987 27.5643L72.9605 26.4022C72.5608 25.539 72.075 25.3607 71.2118 25.7605L68.1241 27.1904C67.2608 27.5902 67.0826 28.0759 67.4823 28.9392L68.0282 30.1178C68.4356 30.9976 68.9481 31.103 69.8461 30.9089L73.4458 30.1492C74.879 29.8484 76.1284 29.673 76.9356 31.416L77.5967 32.8437C78.327 34.4208 77.926 35.5137 76.3489 36.2441L72.9292 37.8277C71.3521 38.558 70.2592 38.157 69.5288 36.5799L68.983 35.4013L70.1782 34.8477L70.7702 36.126C71.17 36.9892 71.6557 37.1675 72.5189 36.7677L75.8059 35.2456C76.6691 34.8458 76.8474 34.36 76.4476 33.4968L75.8018 32.1024C75.3944 31.2225 74.8819 31.1171 73.9839 31.3112L70.3842 32.071C68.951 32.3718 67.7016 32.5472 66.8944 30.8041L66.3332 29.5923C65.6029 28.0152 66.004 26.9222 67.581 26.1919L70.8015 24.7005C72.3786 23.9702 73.4716 24.3713 74.2019 25.9483L74.6939 27.0108L73.4987 27.5643Z"
      fill="white"
    />
    <path
      d="M100.695 18.1672C101.339 18.0824 102.003 18.1722 102.686 18.4366C103.375 18.6942 103.93 19.1226 104.351 19.7218C104.778 20.3144 105.032 20.9236 105.114 21.5494C105.257 22.6299 104.997 23.6011 104.336 24.4631C103.675 25.325 102.804 25.8272 101.723 25.9696C100.649 26.1111 99.6806 25.8513 98.8186 25.19C97.9566 24.5287 97.4545 23.6578 97.3121 22.5774C97.2281 21.9397 97.3072 21.2866 97.5495 20.618C97.7969 19.9427 98.2135 19.3892 98.7994 18.9576C99.3903 18.5194 100.022 18.2559 100.695 18.1672Z"
      fill="white"
    />
    <path
      d="M124.32 25.5705L120.529 25.248C118.797 25.1008 118.053 24.1378 118.194 22.479L118.845 14.8231C118.992 13.0914 119.883 12.3408 121.614 12.4881L125.406 12.8106C127.137 12.9579 127.888 13.848 127.741 15.5797L127.623 16.965L126.31 16.8534L126.431 15.4316C126.512 14.4837 126.178 14.0881 125.23 14.0075L121.585 13.6974C120.637 13.6168 120.241 13.9504 120.161 14.8982L119.503 22.6271C119.423 23.575 119.756 23.9706 120.704 24.0512L124.35 24.3613C125.298 24.4419 125.693 24.1083 125.774 23.1604L125.895 21.7386L127.207 21.8502L127.089 23.2356C126.948 24.8944 126.052 25.7178 124.32 25.5705Z"
      fill="white"
    />
    <path
      d="M135.385 26.6429L131.428 25.8097C129.728 25.4515 129.092 24.4763 129.45 22.7756L131.033 15.257C131.391 13.5563 132.367 12.9204 134.067 13.2786L138.024 14.1118C139.724 14.4699 140.36 15.4451 140.002 17.1458L138.419 24.6645C138.06 26.3651 137.085 27.001 135.385 26.6429ZM132.33 15.4926L130.731 23.0829C130.535 24.0138 130.818 24.4472 131.749 24.6432L135.562 25.4463C136.493 25.6423 136.926 25.3597 137.122 24.4288L138.721 16.8385C138.917 15.9077 138.634 15.4742 137.703 15.2782L133.89 14.4752C132.959 14.2791 132.526 14.5617 132.33 15.4926Z"
      fill="white"
    />
    <path
      d="M152.41 17.5545L153.584 17.9652L149.357 30.0533L148.079 29.6064L145.25 16.9693L141.62 27.3478L140.446 26.9371L144.673 14.849L146.055 15.3321L148.835 27.7776L152.41 17.5545Z"
      fill="white"
    />
    <path
      d="M164.917 23.7144L161.36 22.035L156.408 32.5233L155.217 31.9609L160.169 21.4726L156.612 19.7933L157.128 18.7015L165.432 22.6225L164.917 23.7144Z"
      fill="white"
    />
    <path
      d="M169.864 34.9503L165.305 32.0964L162.103 34.6248L160.956 33.9064L171.736 25.5466L173.008 26.3426L170.198 39.6919L168.988 38.9347L169.864 34.9503ZM170.148 33.7036L171.574 27.1502L166.318 31.306L170.148 33.7036Z"
      fill="white"
    />
    <path
      d="M176.007 43.4588L173.031 41.0878C171.672 40.005 171.586 38.7909 172.623 37.4888L177.411 31.4789C178.494 30.1196 179.651 29.9886 181.01 31.0715L183.986 33.4424C185.346 34.5252 185.477 35.6821 184.394 37.0415L183.527 38.129L182.497 37.3083L183.386 36.1921C183.979 35.4481 183.921 34.9339 183.177 34.3412L180.315 32.0615C179.571 31.4687 179.057 31.5269 178.464 32.271L173.631 38.3381C173.038 39.0822 173.096 39.5963 173.84 40.189L176.702 42.4688C177.446 43.0615 177.96 43.0033 178.553 42.2592L179.442 41.1431L180.473 41.9638L179.606 43.0513C178.569 44.3534 177.367 44.5416 176.007 43.4588Z"
      fill="white"
    />
    <path
      d="M194.596 44.0937L191.794 41.3328L183.653 49.5935L182.714 48.669L190.856 40.4082L188.055 37.6472L188.902 36.7872L195.443 43.2338L194.596 44.0937Z"
      fill="white"
    />
    <path
      d="M206.438 55.6516L198.131 61.6478C196.722 62.665 195.572 62.4793 194.555 61.0702L192.307 57.9552C191.289 56.546 191.475 55.3966 192.884 54.3794L201.191 48.3832L201.962 49.4513L193.625 55.4689C192.854 56.0256 192.772 56.5365 193.328 57.3078L195.491 60.3041C196.048 61.0755 196.559 61.158 197.33 60.6012L205.667 54.5836L206.438 55.6516Z"
      fill="white"
    />
    <path
      d="M209.669 67.0452L210.788 66.4225C211.619 65.9599 211.761 65.4623 211.298 64.631L209.644 61.6576C209.181 60.8264 208.684 60.6846 207.852 61.1471L206.717 61.7787C205.87 62.2502 205.803 62.7691 206.063 63.6502L207.087 67.1838C207.493 68.5908 207.761 69.8238 206.082 70.7578L204.707 71.5228C203.189 72.3679 202.069 72.0488 201.224 70.5301L199.391 67.237C198.546 65.7184 198.865 64.5987 200.384 63.7536L201.519 63.1221L202.16 64.273L200.929 64.958C200.097 65.4206 199.956 65.9182 200.418 66.7495L202.179 69.9147C202.642 70.7459 203.14 70.8878 203.971 70.4252L205.314 69.678C206.161 69.2065 206.228 68.6876 205.968 67.8064L204.944 64.2729C204.538 62.8659 204.27 61.6329 205.949 60.6989L207.116 60.0495C208.635 59.2044 209.754 59.5235 210.599 61.0422L212.325 64.1434C213.17 65.6621 212.851 66.7818 211.332 67.6268L210.309 68.1962L209.669 67.0452Z"
      fill="white"
    />
    <path
      d="M219.652 88.7917C219.815 89.4201 219.806 90.0896 219.627 90.8003C219.456 91.5152 219.098 92.1183 218.555 92.6096C218.019 93.1051 217.445 93.432 216.834 93.5901C215.779 93.8632 214.783 93.7241 213.847 93.1729C212.911 92.6216 212.306 91.8185 212.033 90.7635C211.762 89.7142 211.902 88.7215 212.453 87.7853C213.004 86.8491 213.807 86.2445 214.862 85.9714C215.485 85.8103 216.143 85.8092 216.836 85.9681C217.536 86.1313 218.136 86.4773 218.636 87.0061C219.143 87.5393 219.482 88.1344 219.652 88.7917Z"
      fill="white"
    />
  </svg>
);
const arrowContact = (
  <svg
    className="w-11 h-11"
    width="79"
    height="32"
    viewBox="0 0 79 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M78.1121 17.4571C78.9169 16.6524 78.9169 15.3476 78.1121 14.5429L64.9984 1.42922C64.1937 0.624494 62.889 0.624494 62.0843 1.42922C61.2796 2.23394 61.2796 3.53865 62.0843 4.34337L73.7409 16L62.0843 27.6566C61.2796 28.4613 61.2796 29.7661 62.0843 30.5708C62.889 31.3755 64.1937 31.3755 64.9984 30.5708L78.1121 17.4571ZM0 18.0606H76.6551V13.9394H0V18.0606Z"
      fill="#D3D625"
    />
  </svg>
);

const Footer = () => {
  return (
    <div className="bg-black mt-32 py-16 relative">
      <div className="flex w-10/12 flex-col md:flex-row lg:w-3/4 m-auto md:justify-between lg:h-96 relative md:border-y-[1px] border-white/50 md:py-11">
        <div className="flex flex-col items-start md:items-center justify-center md:w-1/2 ">
          <h1 className="text-white text-3xl lg:text-6xl mb-9 lg:ml-9">
            Let's chat.
          </h1>

          <Link href="/contact" className="relative w-fit group">
            <span>{circleContact}</span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:animate-none group-hover:cursor-pointer">
              {arrowContact}
            </span>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex flex-col lg:flex-row md:justify-center md:items-center md:text-center lg:text-left text-white gap-16 uppercase mt-16 md:mt-0">
          <div className=" flex-col flex">
            <h1 className="lg:text-xl  mb-5">work with us</h1>
            <Link href="/blog" className="text-sm font-light text-white/70">
              NEWS
            </Link>
            <Link
              href="/careers"
              className="text-sm font-light text-white/70 mt-3">
              CAREERS
            </Link>
          </div>
          <div className=" flex-col flex uppercase md-mt-11 lg:mt-0">
            <h1 className="lg:text-xl  mb-5">learn more</h1>
            <Link href="/about" className="text-sm font-light text-white/70">
              About us
            </Link>
            <Link href="/terms" className="text-sm font-light text-white/70 mt-3">
              Terms
            </Link>
          </div>
        </div>

        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-[1px] bg-white/20"></div>
      <a href="https://gobro.studio/" className="md:absolute md:-bottom-11 md:left-1/2 md:-translate-x-1/2 text-gray-300 font-light pt-16">Designed and developed by GoBro Studio</a>
      </div>
    </div>
  );
};

export default Footer;
