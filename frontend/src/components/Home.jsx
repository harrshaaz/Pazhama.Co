<>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="web_standard" name="shell-type" />
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@100..900&family=Plus+Jakarta+Sans:wght@100..900&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}"
    }}
  />
  <header className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md shadow-[0_12px_32px_-4px_rgba(28,26,23,0.05)] border-b border-surface-container-highest">
    <div className="bg-primary text-on-primary py-2 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-label-md text-label-md tracking-wider uppercase">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-sm text-tertiary-fixed">
            public
          </span>
          <p className="hidden sm:inline">
            Free express worldwide shipping on heritage consignments over
            ₹12,500 | Direct from Master Artisans of Kerala
          </p>
          <p className="sm:hidden">Worldwide Shipping on Orders ₹12,500+</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-xs text-tertiary-fixed">
              sync_alt
            </span>
            <span className="tracking-wider">
              Exporting globally • Dual Currency
            </span>
          </div>
          <div
            className="inline-flex items-center p-0.5 bg-primary-container rounded-full border border-primary-fixed/20 shadow-inner"
            id="currency-toggle-group"
          >
            <button
              className="px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold tracking-wider transition-all duration-300 bg-tertiary-container text-on-tertiary-container shadow-sm flex items-center gap-1"
              id="currency-btn-inr"
              title="View pricing in Indian Rupees"
              type="button"
            >
              <span className="">₹ INR</span>
            </button>
            <button
              className="px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold tracking-wider transition-all duration-300 text-on-primary hover:text-tertiary-fixed flex items-center gap-1"
              id="currency-btn-usd"
              title="Convert pricing to US Dollars"
              type="button"
            >
              <span className="">$ USD</span>
            </button>
          </div>
          <div className="relative hidden sm:inline-block">
            <select
              className="bg-transparent text-on-primary font-label-md text-label-md border-0 focus:ring-0 focus:outline-none cursor-pointer pr-4"
              id="currency-region-select"
            >
              <option
                className="bg-primary text-on-primary"
                selected=""
                value="INR"
              >
                INR (₹) CURRENCY / REGION
              </option>
              <option className="bg-primary text-on-primary" value="USD">
                USD ($) CURRENCY / REGION
              </option>
              <option className="bg-primary text-on-primary" value="EUR">
                EUR (€) CURRENCY / REGION
              </option>
              <option className="bg-primary text-on-primary" value="AED">
                AED (د.إ) CURRENCY / REGION
              </option>
              <option className="bg-primary text-on-primary" value="GBP">
                GBP (£) CURRENCY / REGION
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-lg">
      <div className="flex items-center gap-space-md shrink-0">
        <img
          alt="Pazhama.co Brand Logo"
          className="h-8 w-auto object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8R98_zPnI3lzza29l76NoTV9xPiaym4vsKY9yzmDCXA2RxF_kbrXElI0a-EVHWYSXBRTLzakSM9wYI7opCjupjvaIibN5f4nqaUNLrn_Jxh0iagdf1jcr2vr24tAp9TIGGYKnGMzWUDct3IO3JgBsHUUmBjJ3uCaDL-ObtuOfqJ_RGmgg6BUVHZ1sQjrYmdyVkejdtmYYpWYXjyK8nSQmDT2JW7MHOW4ZzuCR7HrBXMqt7oSFcj-bIA"
        />
        <a className="flex flex-col" data-path="home" href="#">
          <span className="font-headline-md text-headline-md tracking-tight text-primary leading-none font-semibold">
            Pazhama<span className="text-tertiary">.co</span>
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mt-1 hidden sm:block">
            Kerala, Curated for the World
          </span>
        </a>
      </div>
      <nav
        className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0"
        data-active-classes="text-primary font-semibold border-b-2 border-primary"
      >
        <a
          aria-current="page"
          className="uppercase tracking-wider transition-colors py-2 text-primary font-semibold border-b-2 border-primary text-xs xl:text-sm whitespace-nowrap"
          data-path="home"
          href="#"
        >
          Home
        </a>
        <a
          className="uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-2 font-medium text-xs xl:text-sm whitespace-nowrap"
          data-path="shop-catalog"
          href="#"
        >
          Shop Catalog
        </a>
        <a
          className="uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-2 font-medium text-xs xl:text-sm whitespace-nowrap"
          data-path="regions-of-kerala"
          href="#"
        >
          Regions of Kerala
        </a>
        <a
          className="uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-2 font-medium text-xs xl:text-sm whitespace-nowrap"
          data-path="our-story"
          href="#"
        >
          Our Story
        </a>
        <a
          className="uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-2 font-medium text-xs xl:text-sm whitespace-nowrap"
          data-path="gi-heritage"
          href="#"
        >
          GI Heritage
        </a>
      </nav>
      <div className="flex items-center gap-space-md">
        <div className="hidden md:flex items-center bg-surface-container-low px-space-md py-space-xs rounded-lg border border-surface-container-highest">
          <span className="material-symbols-outlined text-outline text-lg mr-space-sm">
            search
          </span>
          <input
            className="bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none w-36 lg:w-48"
            placeholder="Search artisan creations..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          <a
            className="relative p-space-xs text-on-surface-variant hover:text-primary transition-colors"
            data-path="wishlist"
            href="#"
            title="Consignment Wishlist"
          >
            <span className="material-symbols-outlined">favorite</span>
            <span className="absolute top-0 right-0 bg-secondary text-on-secondary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </a>
          <a
            className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high transition-colors px-space-md py-space-sm rounded-lg text-on-surface"
            data-path="cart"
            href="#"
          >
            <span className="material-symbols-outlined text-primary">
              local_mall
            </span>
            <span className="font-label-md text-label-md hidden sm:inline font-semibold">
              2 items - ₹19,900
            </span>
          </a>
          <a
            className="flex items-center gap-space-xs pl-space-xs"
            data-path="patron-profile"
            href="#"
            title="Curator Profile"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-tertiary-container"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPbPuMlYNxYR3s2mKMCXnuA1mQ4sec1UxbQORYvrP_WjW_OEtYP1zoiAj6LrzzmJlp3Cg93N6bckK3MksBoswnufF-EbPbAas7zNp1E-LWdSMlnEcCvW7z77uPyiEu19LsHFaAsvqKqogkBIu8NXZ9Lz05Dm6yu_eO0whT3sTjN6-q2TURkHSIyMMgBtY-C48_0vQjCe2ZrSaMj_BAMYlFTfpgspU5XskcTh4zaMmNMx-70cGI8JgvJg"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
  <main className="w-full pt-28 bg-background min-h-screen">
    <div className="flex flex-col w-full">
      {/* Hero Section with Layered Editorial Texture */}
      <section className="relative w-full bg-surface-container-low px-6 lg:px-12 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Text Column (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-highest rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                Archival Release • Seasonal Provenance 2025
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary tracking-tight font-medium leading-[1.1] mb-6">
              Living Traditions of God’s Own Country, Delivered to Your
              Doorstep.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Handcrafted masterworks, single-estate heirloom spices, and
              GI-certified heritage treasures preserved across seven generations
              of Kerala craft guilds.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-3 bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary font-label-lg text-label-lg uppercase tracking-wider px-8 py-4 rounded transition-all duration-300 shadow-md hover:shadow-xl group"
                href="#masterpieces"
              >
                <span className="">Explore the Harvest &amp; Crafts</span>
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest hover:bg-surface text-primary font-label-lg text-label-lg uppercase tracking-wider px-7 py-4 rounded transition-colors shadow-sm"
                href="#provenance-manifesto"
              >
                <span className="material-symbols-outlined text-tertiary">
                  workspace_premium
                </span>
                <span className="">Discover Our Provenance</span>
              </a>
            </div>
            {/* Curatorial Metric Bar */}
            <div className="grid grid-cols-3 gap-6 pt-12 mt-12 w-full max-w-lg">
              <div>
                <span className="font-display-md text-display-md text-primary font-medium block leading-none">
                  100%
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-2 block">
                  GI-Tagged Origins
                </span>
              </div>
              <div>
                <span className="font-display-md text-display-md text-primary font-medium block leading-none">
                  38+
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-2 block">
                  Master Lineages
                </span>
              </div>
              <div>
                <span className="font-display-md text-display-md text-primary font-medium block leading-none">
                  24
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-2 block">
                  Global Hubs Shipped
                </span>
              </div>
            </div>
          </div>
          {/* Asymmetric Editorial Visual Collage (Col 8-12) */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            {/* Background organic architectural wash */}
            <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-tertiary-container/10 filter blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-72 h-72 rounded-full bg-secondary-container/15 filter blur-2xl -z-10 pointer-events-none" />
            <div className="relative w-full max-w-lg grid grid-cols-2 gap-4 sm:gap-5">
              {/* Item 1: Aranmula Mirror */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ring-1 ring-primary/10">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img
                    alt="Aranmula Metal Mirror"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEfp049s9VUZJZDDuCcuYvnk1nfuLUIKJgdCc3GnBG8FzfaM98v3zNhst5ME9NSGiEHL5OC3krVKceJTZ75Wz4yoz-e-YM2Qdmu8pKetSvslq8dzxY0IG0FHeF4bxIKSMdY_TdDKA-RQbdMe9k2ZCH2iAqfJkSWnHEEQnAv4J5K5emf7eecuXFkk6RPAdMuP76zl7Idx6GHwvm8jtf4g725xPtNtPBAt-wNlDBzgH3fgHEzwXdqrU9gg"
                    style={{
                      filter: "contrast(1.1) saturate(1.08) brightness(1.03)",
                      imageRendering: "-webkit-optimize-contrast"
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-[10px] uppercase font-bold tracking-wider shadow-sm border border-primary/10">
                    GI Specimen #01
                  </div>
                </div>
                <div className="p-3 bg-surface-container-lowest flex flex-col justify-between border-t border-surface-container-highest">
                  <p className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider truncate">
                    Aranmula Mirror
                  </p>
                  <p className="font-body-sm text-[11px] text-stone-700 font-medium truncate">
                    Zero-distortion alloy casting
                  </p>
                </div>
              </div>
              {/* Item 2: Wild Tellicherry Pepper */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ring-1 ring-primary/10">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img
                    alt="Wayanad Wild Pepper"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBjSUpARm1wQs199NgUke1bH4c9OZKOgZ2Z8esi8X12KGVAklr25G0_h5JnUwmg3xfRay8tZnL46US6DaYn_x_22y8dywGxi6VjKDb6_l-OHtveQotRb5hdaNaqOfBPGuBB_ZiQ95O1DUZrIUny0iDPywzarFYKve-esguKEMv705y_SRHszupiQS5g6AtZPqQl6eZa07OsEhHgiwwm9VACY_Kb58_EC8R_WDFw8v-WpGcJzK3g0grTg"
                    style={{
                      filter: "contrast(1.1) saturate(1.08) brightness(1.03)",
                      imageRendering: "-webkit-optimize-contrast"
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-[10px] uppercase font-bold tracking-wider shadow-sm border border-primary/10">
                    Monsoon Crop
                  </div>
                </div>
                <div className="p-3 bg-surface-container-lowest flex flex-col justify-between border-t border-surface-container-highest">
                  <p className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider truncate">
                    Wayanad Pepper
                  </p>
                  <p className="font-body-sm text-[11px] text-stone-700 font-medium truncate">
                    Hand-garbled single estate
                  </p>
                </div>
              </div>
              {/* Item 3: Mannar Bronze Uruli */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ring-1 ring-primary/10">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img
                    alt="Mannar Bronze Uruli"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnPBx8JExko5_hlWxG2-NJtp011Re63FvLWgZhSkQi26Q4UdnbLu9tNxIF-EhVH-gR5z4foxA5i2g7GWP6OaU685iKp4QSYrClui1ScfhTN93bjCNKhW9i5BT3huvLVmnkW8ngrAqItumael4Lbc6SCF9tRHckJ5-ldefOop9SgTAk2ICacCX7SRzYoHAADqeJ5xqm1XGB-1OR6fipjdyC1p-Sx7Cb1UNcAtWW5AwLbdtnMVs-dqlNqA"
                    style={{
                      filter: "contrast(1.1) saturate(1.08) brightness(1.03)",
                      imageRendering: "-webkit-optimize-contrast"
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-[10px] uppercase font-bold tracking-wider shadow-sm border border-primary/10">
                    Mannar Guild
                  </div>
                </div>
                <div className="p-3 bg-surface-container-lowest flex flex-col justify-between border-t border-surface-container-highest">
                  <p className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider truncate">
                    Mannar Uruli
                  </p>
                  <p className="font-body-sm text-[11px] text-stone-700 font-medium truncate">
                    Hand-carved bell metal
                  </p>
                </div>
              </div>
              {/* Item 4: Balaramapuram Kasavu */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ring-1 ring-primary/10">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img
                    alt="Balaramapuram Kasavu"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrtWm2ZeJS-2kYTGhojpja9yAofTHn8Zk8M2jqeQiguQVZhmCErGf5aAQZuAaum-8_kpXTBLLUioIioCuRDU4H71vtkaQhu2VTSKyI4CRfwQdRz5mYrZTFfsScr8vhTuRdg2MtXv8-8Uo_EMS3N7yt7r7eYn30faCW19GUm6BjCFoza2PAvF3cqr-lHypnlFSrU4qirJ4Rv-2LI0T1_EcSiExTCpRN5Q1QDnf_t0pyikYHbXMe81r5FQ"
                    style={{
                      filter: "contrast(1.1) saturate(1.08) brightness(1.03)",
                      imageRendering: "-webkit-optimize-contrast"
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-[10px] uppercase font-bold tracking-wider shadow-sm border border-primary/10">
                    Royal Pit Loom
                  </div>
                </div>
                <div className="p-3 bg-surface-container-lowest flex flex-col justify-between border-t border-surface-container-highest">
                  <p className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider truncate">
                    Kasavu Stole
                  </p>
                  <p className="font-body-sm text-[11px] text-stone-700 font-medium truncate">
                    Pure gold zari thread weave
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Trust Badges Strip */}
        <div className="max-w-7xl mx-auto mt-16 pt-10 border-none bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <h2 className="font-label-md text-label-md text-primary uppercase font-bold">
                  100% GI Authenticated
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Protected geographical origin certs
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <div>
                <h2 className="font-label-md text-label-md text-primary uppercase font-bold">
                  Direct Artisan Equity
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Fair compensation with no middlemen
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0 text-tertiary">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <div>
                <h2 className="font-label-md text-label-md text-primary uppercase font-bold">
                  Carbon-Neutral Transit
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Insured global eco-packaging
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined">history_edu</span>
              </div>
              <div>
                <h2 className="font-label-md text-label-md text-primary uppercase font-bold">
                  Heritage Certificate
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Serial numbered provenance folio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2: Explore by Kerala Region */}
      <section className="w-full px-6 lg:px-12 py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Topography of Craft
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
                Explore Kerala by Sacred Provenance
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                Each geographic cluster holds centuries of micro-climatic
                knowledge, metallurgical alchemy, and botanical terroir found
                nowhere else on earth.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-secondary uppercase tracking-wider mt-4 md:mt-0 group font-bold"
              href="#all-regions"
            >
              <span className="">View Territorial Atlas</span>
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                north_east
              </span>
            </a>
          </div>
          {/* Bento Grid for Regions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Region 1: Wayanad High Ranges */}
            <div className="group relative bg-surface-container rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  data-alt="Scenic mist-shrouded green hills of Wayanad Kerala tea and spice plantations with early morning golden atmospheric haze and dense tropical canopy."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgeaopCQKzZYPrRettfh2J8_eq8yhJbdI3f7W1_a5it_qM4v2FM4KGfduxCSiTANM5K9UWPGUWFDcDJuKjZ5lhXuO_OZwU5gEsn3sw1L1MX770TyCt4jJK0HEbWoW2kMWY0WB5X-g83Tt6mLllvjSi4JhcL_cbOTs1e7P8KtRzpGXm3JdkBwqYyMTmt9of1YMh0U8MCP-SvSRXjJkUemKmnTdjo-5YXBweh3CZO8j_x-sAjODYF6LcnA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Western Ghats
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-on-primary">
                  <span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest uppercase">
                    Elevation: 900m
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold">
                    Wayanad
                  </h3>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 bg-surface-container">
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Mist-clad biodiverse hills, certified wild organic black
                  pepper, cured ginger roots, forest honey, and tribal bamboo
                  craft.
                </p>
                <div className="flex items-center justify-between pt-3 bg-surface-container-low p-2 rounded">
                  <span className="font-label-sm text-label-sm text-primary font-semibold">
                    18 Rare Consignments
                  </span>
                  <span className="material-symbols-outlined text-secondary text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            {/* Region 2: Aranmula Metallurgy Sanctuary */}
            <div className="group relative bg-surface-container rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  data-alt="An ancient temple riverside stone architecture along Pamba river in Aranmula Kerala, with traditional bronze casting furnaces glowing softly in an open veranda workshop."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLkkSvdYL4D8MdNmCbsHQbHK1OVtVcI8THkIfkVz9KSHoU0gqmVFYc0wUTpgeHJpTEZZFx6F2tZcU4PRqci5WAG6F1xKZU05c7ey-YIZdaBGojLri65S1MSbAGXPYQTUcfNTVIwQLWPikYPu0-M8_iksJr7jHwQHTENxJGK2UTtvkWlmDnId8FYw979nmOgd4bxSZ7ep34xhu4-1XC6thYo5vHUqxtuQ2iQ3_QVpwE0BZQZRwfg6bpgQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Pathanamthitta
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-on-primary">
                  <span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest uppercase">
                    Pamba River Basin
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold">
                    Aranmula
                  </h3>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 bg-surface-container">
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Sacred bell-metal alloy mirrors cast with a secret family
                  proportion, without glass or chemical mercury coating.
                </p>
                <div className="flex items-center justify-between pt-3 bg-surface-container-low p-2 rounded">
                  <span className="font-label-sm text-label-sm text-primary font-semibold">
                    9 Certified Mirrors
                  </span>
                  <span className="material-symbols-outlined text-secondary text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            {/* Region 3: Malabar Spice Coast */}
            <div className="group relative bg-surface-container rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  data-alt="Historic coastal warehouse at Kozhikode Malabar port with mounds of cured whole cardamom pods, cinnamon quills, and antique wooden spice balance scales."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJxIs2ePHvTs5aAPl_BZ3XnU2WBWTxtjWtLxIllNt5vAORvUAmrFX8oEGcVmxLOtcymiMJ9fS6KSBkodqdB6maJ_LOtH7snN1s83UkLYHOaHJBFnVJpi-9g1J0Royd4_jIcif0EoA-JdtT9RFtjIrgbGs1pfvCWwajrn43E5Kespxsf9ZqAvvEiwp32OFSlaaz2JeQ8gfZWnjVmlr6l9WyXRFEdqSx8agDvX0ufAZyEbqxzJ-cteNwAg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Arabian Seaboard
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-on-primary">
                  <span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest uppercase">
                    Maritime Trade Port
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold">
                    Malabar Coast
                  </h3>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 bg-surface-container">
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  The cradle of the historic global spice trade. Tellicherry
                  Garbled Extra Bold peppers, sun-cured vanilla beans, and wild
                  nutmeg.
                </p>
                <div className="flex items-center justify-between pt-3 bg-surface-container-low p-2 rounded">
                  <span className="font-label-sm text-label-sm text-primary font-semibold">
                    24 Harvest Selections
                  </span>
                  <span className="material-symbols-outlined text-secondary text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            {/* Region 4: Balaramapuram & Chendamangalam */}
            <div className="group relative bg-surface-container rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  data-alt="Intricate wooden Kerala pit looms with spools of fine unbleached ecru cotton and metallic gold kasavu borders stretched neatly across rustic wooden reeds."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWr8ZDQiJWunLQypn3UCFgAj4vodPXApkhHFfsci2zBdZrJa7hBjgvLBq6TOO8OayU4SUZggr3FtpcyzCHl1hW_1vvxfEJsU3iWwttejeyq3N-6b-CSp_lnwq8bwF12Qsr3F-LB9tSXulrALB3SAYfM97YSAXlPg2sl0xRcwMRtvwS_uWOU6xiWJWJrvmy95mY-ucCGTCoWLun-mYjAKAblCb7VPSBhUBc7rw5pgvlOp9pVBolxPhUdg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Travancore Weaves
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-on-primary">
                  <span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest uppercase">
                    Royal Loom Registry
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold">
                    Balaramapuram
                  </h3>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 bg-surface-container">
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Royal court handlooms, organic unbleached cotton sarees with
                  real zari metallic gold borders woven on age-old pit looms.
                </p>
                <div className="flex items-center justify-between pt-3 bg-surface-container-low p-2 rounded">
                  <span className="font-label-sm text-label-sm text-primary font-semibold">
                    14 Limited Weaves
                  </span>
                  <span className="material-symbols-outlined text-secondary text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: Featured Masterpieces (Rich Product Grid) */}
      <section
        className="w-full px-6 lg:px-12 py-20 bg-surface-container-low"
        id="masterpieces"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-surface-container-highest mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary text-base">
                  verified
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  CURATOR’S CHOICE CONSIGNMENTS
                </span>
              </div>
              <h2 className="font-display-md text-display-md text-primary font-medium tracking-tight">
                Certified Heritage Masterpieces
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
                Directly acquired from accredited master craftsmen and
                state-registered guilds, each piece arrives with authenticated
                archival papers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                className="px-4 py-2 bg-primary text-on-primary font-label-sm text-label-sm uppercase font-bold tracking-wider rounded transition-colors shadow-sm"
                type="button"
              >
                All Creations
              </button>
              <button
                className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase font-semibold tracking-wider rounded transition-colors border border-surface-container-highest"
                type="button"
              >
                Metallurgy
              </button>
              <button
                className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase font-semibold tracking-wider rounded transition-colors border border-surface-container-highest"
                type="button"
              >
                Handlooms
              </button>
              <button
                className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase font-semibold tracking-wider rounded transition-colors border border-surface-container-highest"
                type="button"
              >
                Harvest Reserves
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {/* Card 1: Authentic Aranmula Kannadi Hand Mirror */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-surface-container-highest">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Authentic Aranmula Kannadi Hand Mirror"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuWMwR9ol0JOSKNRZ6uBwRKgW6exBSgnN37-eOmeVpGPJWWvpIrKEQJSK-i34Vs3PUEU_LvddWAxRwshJBVLvtKui9Zo_PM4wwahC0AIGsVrS6BCVd4zvliemoObQdaYfpfrJT5Ta4mzTtdY_AyDVAdRNmVj6SVENly7Yz-yuVHNZ8ILiGoB8rTznNItCi6lRINhTGGbPcUYc_qtRnmJ-hQoAPaWDmr7jc93D_RGopH4LsjNz3TKDxBw"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-surface-container-lowest/95 backdrop-blur text-primary px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-sm">
                    GI TAGGED #01
                  </span>
                  <span className="bg-primary text-on-primary px-2 py-0.5 rounded font-label-sm text-[10px] tracking-widest uppercase font-semibold">
                    SOLE GUILD STOCK
                  </span>
                </div>
                <button
                  aria-label="Add to Wishlist"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-on-surface flex items-center justify-center transition-colors shadow-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg hover:text-secondary">
                    favorite
                  </span>
                </button>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 bg-surface-container-lowest">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                    <span className="text-primary font-bold">
                      ARANMULA, PATHANAMTHITTA
                    </span>
                    <div className="flex items-center gap-1 text-stone-600 font-medium">
                      <span className="material-symbols-outlined text-sm text-tertiary">
                        star
                      </span>
                      <span className="text-stone-900 font-bold text-xs">
                        5.0
                      </span>
                      <span className="text-stone-400 text-xs">(48)</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug line-clamp-1 mb-1.5 group-hover:text-secondary transition-colors">
                    Authentic Aranmula Kannadi Hand Mirror
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    Pure copper-tin alloy zero-distortion front reflecting
                    metal…
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-container-highest flex flex-col gap-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="block text-[10px] uppercase font-semibold tracking-wider text-stone-400 leading-none mb-1">
                        Consignment Value
                      </span>
                      <span
                        className="text-xl font-bold text-stone-900 tracking-tight product-price-val leading-none"
                        data-inr="₹23,400"
                        data-usd="$270 USD"
                      >
                        ₹23,400
                      </span>
                    </div>
                    <button
                      className="product-currency-toggle bg-surface-container-low hover:bg-surface-container-high text-stone-700 text-xs font-medium px-2.5 py-1 rounded-full border border-stone-300 flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                      data-inr="₹23,400"
                      data-usd="$270 USD"
                      title="Convert price between INR and USD"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xs text-tertiary">
                        currency_exchange
                      </span>
                      <span className="font-semibold">⇄ $ USD</span>
                    </button>
                  </div>
                  <button
                    className="w-full py-3 px-4 bg-[#8b3a1a] hover:bg-[#722e14] text-white rounded-lg font-medium text-sm tracking-wide shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-bold uppercase tracking-wider text-xs">
                      Acquire
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2: Tellicherry Garbled Extra Bold (TGEB) Pepper */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-surface-container-highest">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Tellicherry Garbled Extra Bold (TGEB) Pepper"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC8xjm2wMXnsWbSXofU4rKlXXSF0sFEGmQ6BjeCFKQ_xWBtNM1-oCRBAi8qFI0lNts4PXlJD9WZoktAMg3D1paPwOx8xFFGPAWBV8_vmnTYJ2-qkkNw_xv6TfGKpw6yzEM-hT2kifoeRSzKU8Qxi_Kzj-LDwEgbq8kqRgz8-tN2DXyAiSsRLOjPZBM2iURa-st15y_FWVoQTRwdStC9oZIsyQo_gqaG-bJNK4AX4V3WH7sUX8htkXHEQ"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-surface-container-lowest/95 backdrop-blur text-primary px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-sm">
                    ESTATE HARVEST
                  </span>
                  <span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded font-label-sm text-[10px] tracking-widest uppercase font-semibold">
                    TGEB GRADE 1
                  </span>
                </div>
                <button
                  aria-label="Add to Wishlist"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-on-surface flex items-center justify-center transition-colors shadow-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg hover:text-secondary">
                    favorite
                  </span>
                </button>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 bg-surface-container-lowest">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                    <span className="text-primary font-bold">
                      WAYANAD HIGH RANGES
                    </span>
                    <div className="flex items-center gap-1 text-stone-600 font-medium">
                      <span className="material-symbols-outlined text-sm text-tertiary">
                        star
                      </span>
                      <span className="text-stone-900 font-bold text-xs">
                        4.9
                      </span>
                      <span className="text-stone-400 text-xs">(112)</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug line-clamp-1 mb-1.5 group-hover:text-secondary transition-colors">
                    Tellicherry Garbled Extra Bold (TGEB) Pepper
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    Hand-harvested late-monsoon berries (4.75mm diameter)
                    packed…
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-container-highest flex flex-col gap-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="block text-[10px] uppercase font-semibold tracking-wider text-stone-400 leading-none mb-1">
                        STONEWARE 250G
                      </span>
                      <span
                        className="text-xl font-bold text-stone-900 tracking-tight product-price-val leading-none"
                        data-inr="₹2,800"
                        data-usd="$32 USD"
                      >
                        ₹2,800
                      </span>
                    </div>
                    <button
                      className="product-currency-toggle bg-surface-container-low hover:bg-surface-container-high text-stone-700 text-xs font-medium px-2.5 py-1 rounded-full border border-stone-300 flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                      data-inr="₹2,800"
                      data-usd="$32 USD"
                      title="Convert price between INR and USD"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xs text-tertiary">
                        currency_exchange
                      </span>
                      <span className="font-semibold">⇄ $ USD</span>
                    </button>
                  </div>
                  <button
                    className="w-full py-3 px-4 bg-[#8b3a1a] hover:bg-[#722e14] text-white rounded-lg font-medium text-sm tracking-wide shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-bold uppercase tracking-wider text-xs">
                      Acquire
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3: Cast Bronze Traditional Uruli Vessel */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-surface-container-highest">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Cast Bronze Traditional Uruli Vessel"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOz6V02mLgu9CG_8N1_kTl1YoCor74aUDXCa5SRnzAzwplrRK99TReE3JUO0v6qiExap0lyRnj7Nl-eGbJXTvGxnsOHuQN22Q1K_-Xam4glSz7PtQb5orGud9qlTCCDQVujy3qhWAGbF2Y06tgAoaqLswW_4OOwnjvkhg7rFLAysKnQN5xRFGHb5w7__cMP5Kg44yaq4YATOCKdl-EwTK8i6XsEC_uwcfgj9yx_MPsEZNqgtWICbXYWg"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-surface-container-lowest/95 backdrop-blur text-primary px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-sm">
                    MANNAR METALLURGY
                  </span>
                  <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded font-label-sm text-[10px] tracking-widest uppercase font-semibold">
                    HEAVY BELL METAL
                  </span>
                </div>
                <button
                  aria-label="Add to Wishlist"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-on-surface flex items-center justify-center transition-colors shadow-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg hover:text-secondary">
                    favorite
                  </span>
                </button>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 bg-surface-container-lowest">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                    <span className="text-primary font-bold">
                      MANNAR GUILD WORKSHOP
                    </span>
                    <div className="flex items-center gap-1 text-stone-600 font-medium">
                      <span className="material-symbols-outlined text-sm text-tertiary">
                        star
                      </span>
                      <span className="text-stone-900 font-bold text-xs">
                        4.9
                      </span>
                      <span className="text-stone-400 text-xs">(32)</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug line-clamp-1 mb-1.5 group-hover:text-secondary transition-colors">
                    Cast Bronze Traditional Uruli Vessel
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    Hand-beaten bell-metal alloy (Kansya) casting for slow
                    culinary…
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-container-highest flex flex-col gap-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="block text-[10px] uppercase font-semibold tracking-wider text-stone-400 leading-none mb-1">
                        WEIGHT: 3.4KG
                      </span>
                      <span
                        className="text-xl font-bold text-stone-900 tracking-tight product-price-val leading-none"
                        data-inr="₹16,200"
                        data-usd="$188 USD"
                      >
                        ₹16,200
                      </span>
                    </div>
                    <button
                      className="product-currency-toggle bg-surface-container-low hover:bg-surface-container-high text-stone-700 text-xs font-medium px-2.5 py-1 rounded-full border border-stone-300 flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                      data-inr="₹16,200"
                      data-usd="$188 USD"
                      title="Convert price between INR and USD"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xs text-tertiary">
                        currency_exchange
                      </span>
                      <span className="font-semibold">⇄ $ USD</span>
                    </button>
                  </div>
                  <button
                    className="w-full py-3 px-4 bg-[#8b3a1a] hover:bg-[#722e14] text-white rounded-lg font-medium text-sm tracking-wide shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-bold uppercase tracking-wider text-xs">
                      Acquire
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 4: Pure Zari Kasavu Heirloom Stole */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-surface-container-highest">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Pure Zari Kasavu Heirloom Stole"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUTMeNSf9EviZG4aP3UXYAxhH7BXih0IrE-H9LDD-WcyiZ2ikvFjAb46LNzfJU51aEjD_q1Hr4KWR_ZIlXcOHy9yXwhGqSaqlh3oNQTuRr0Soz3ESZF4_3o8AAYxlNUfz05vXkbdXLMjUt87hx4Z_ST0ievhhksC2NCuBg0R4rE6IhGU_Qx4qhEmlufW5yRRLbbhSmJbBQw6EVcJx1LT_aULLp5C6E5gWuV5_UUtkQnhtysH6MG3H51g"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-surface-container-lowest/95 backdrop-blur text-primary px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-sm">
                    TRAVANCORE ROYAL WEAVE
                  </span>
                  <span className="bg-surface-container text-on-surface px-2 py-0.5 rounded font-label-sm text-[10px] tracking-widest uppercase font-semibold">
                    PURE GOLD ZARI
                  </span>
                </div>
                <button
                  aria-label="Add to Wishlist"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-on-surface flex items-center justify-center transition-colors shadow-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg hover:text-secondary">
                    favorite
                  </span>
                </button>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 bg-surface-container-lowest">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                    <span className="text-primary font-bold">
                      BALARAMAPURAM HANDLOOMS
                    </span>
                    <div className="flex items-center gap-1 text-stone-600 font-medium">
                      <span className="material-symbols-outlined text-sm text-tertiary">
                        star
                      </span>
                      <span className="text-stone-900 font-bold text-xs">
                        5.0
                      </span>
                      <span className="text-stone-400 text-xs">(64)</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug line-clamp-1 mb-1.5 group-hover:text-secondary transition-colors">
                    Pure Zari Kasavu Heirloom Stole
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    Unbleached natural organic cotton woven on wooden pit-looms
                    with…
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-container-highest flex flex-col gap-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="block text-[10px] uppercase font-semibold tracking-wider text-stone-400 leading-none mb-1">
                        100% HAND-SPUN
                      </span>
                      <span
                        className="text-xl font-bold text-stone-900 tracking-tight product-price-val leading-none"
                        data-inr="₹13,700"
                        data-usd="$158 USD"
                      >
                        ₹13,700
                      </span>
                    </div>
                    <button
                      className="product-currency-toggle bg-surface-container-low hover:bg-surface-container-high text-stone-700 text-xs font-medium px-2.5 py-1 rounded-full border border-stone-300 flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                      data-inr="₹13,700"
                      data-usd="$158 USD"
                      title="Convert price between INR and USD"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xs text-tertiary">
                        currency_exchange
                      </span>
                      <span className="font-semibold">⇄ $ USD</span>
                    </button>
                  </div>
                  <button
                    className="w-full py-3 px-4 bg-[#8b3a1a] hover:bg-[#722e14] text-white rounded-lg font-medium text-sm tracking-wide shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-bold uppercase tracking-wider text-xs">
                      Acquire
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: Authenticity & Living Story Section */}
      <section
        className="w-full px-6 lg:px-12 py-24 bg-primary text-on-primary relative overflow-hidden"
        id="provenance-manifesto"
      >
        {/* Decorative background watermarks */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-container/40 filter blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Visual Column (Col 1-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-primary-container">
              <img
                className="w-full h-[460px] object-cover"
                data-alt="Elderly master craftsman from Kerala with weathered hands polishing a sacred Aranmula bell-metal alloy mirror with red velvet cloth in his traditional earthen workshop."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9eoMNqOO8Ce36jOm0ZOOCCkXXjssje8ah2aZEmja1KnM-RLRqKYacqQb-llRC6xddUBros23-7dqmPkGFtTUGMlFlfraxmjw6gmwBbBuaZ1pRjboGhh-KnFD7TsyGsKcuep5VCZNfDxGgoQYE8mxSYyZdSVdUm6EWSkVV2-cNAOjLS3mOCw2vCdfqDbVWiJln0KAPg8dRJrPLi2UpPwS5jnU0CnomVJKlLPU64soSKXi2JFik5DZ5uQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/95 text-on-surface p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary">
                    workspace_premium
                  </span>
                  <div>
                    <h4 className="font-label-md text-label-md uppercase font-bold text-primary">
                      Seventh-Generation Lineage
                    </h4>
                    <p className="font-body-sm text-body-sm text-outline">
                      Master Parameswaran Achari • Aranmula Guild
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Narrative Column (Col 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed font-bold">
              Custodianship Manifesto
            </span>
            <h2 className="font-display-md text-display-md text-on-primary mt-3 leading-tight font-medium">
              "Every Object Carries the Soul of Seven Ancestral Lineages."
            </h2>
            {/* Blockquote Callout */}
            <div className="my-8 pl-6 bg-primary-container/40 py-4 pr-6 rounded-r-lg">
              <p className="font-headline-sm text-headline-sm italic text-tertiary-fixed font-normal leading-relaxed">
                “We do not manufacture; we breathe life into metal using secret
                alloy proportions handed down through ancestral verses. When you
                look into an Aranmula mirror, you behold unbroken centuries.”
              </p>
            </div>
            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed mb-8">
              In an era of mass obsolescence, Pazhama.co stands as a sovereign
              bridge connecting Kerala's remote guild artisans with
              international patrons. Each harvest, cast, and weave is bound to
              its indigenous geographical coordinates and legally protected
              under Geographical Indications (GI).
            </p>
            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed shrink-0 text-xl">
                  fact_check
                </span>
                <div>
                  <h4 className="font-label-md text-label-md uppercase font-bold text-on-primary">
                    Authenticated GI Dossier
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
                    Accompanied by a tamper-evident physical deed of regional
                    provenance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed shrink-0 text-xl">
                  volunteer_activism
                </span>
                <div>
                  <h4 className="font-label-md text-label-md uppercase font-bold text-on-primary">
                    78% Value Direct Return
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
                    Capital settles directly into guild cooperative bank
                    reserves in rural Kerala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5: Limited Batch Harvest Reserve (Countdown & Provenance Strip) */}
      <section className="w-full px-6 lg:px-12 py-16 bg-surface-container">
        <div className="max-w-7xl mx-auto bg-surface-container-lowest rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12">
          {/* Content (Col 1-7) */}
          <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  Limited Allocation • Small Batch #04/2025
                </span>
              </div>
              <h2 className="font-display-md text-display-md text-primary leading-tight font-medium">
                Monsoon Harvest Reserve: Wild High-Range Spices &amp; Botanicals
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed max-w-xl">
                Sourced during the torrential Southwest monsoon from private
                shade-grown biodiverse estates in Wayanad and Idukki.
                Hand-sorted, single-origin, unadulterated.
              </p>
              {/* Allocation Metric Sparkline / Progress Ring */}
              <div className="mt-8 p-6 bg-surface-container-low rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-bold">
                    Batch Release Allocation
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">
                    142 of 200 Jars Reserved
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-secondary h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: "71%" }}
                  />
                </div>
                <div className="flex justify-between items-center mt-3 text-outline font-label-sm text-label-sm">
                  <span className="">Single-Origin Wayanad Grade A</span>
                  <span className="">Remaining: 58 Jars Worldwide</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary font-label-lg text-label-lg uppercase tracking-wider px-8 py-4 rounded transition-colors shadow-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">
                    lock
                  </span>
                  <span
                    className="harvest-reserve-text"
                    data-inr="Reserve Batch #04 Jar (₹5,650)"
                    data-usd="Reserve Batch #04 Jar ($65 USD)"
                  >
                    Reserve Batch #04 Jar (₹5,650)
                  </span>
                </button>
                <button
                  className="harvest-currency-toggle px-3 py-3 rounded-lg bg-surface-container-high hover:bg-tertiary-container/30 text-primary font-label-sm text-xs font-bold tracking-wider transition-colors inline-flex items-center gap-1.5 border border-surface-container-highest shadow-sm"
                  title="Convert reservation price to Dollars"
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm text-tertiary">
                    currency_exchange
                  </span>
                  <span className="">Convert to $ USD</span>
                </button>
              </div>
              <span className="font-body-sm text-body-sm text-outline">
                Direct courier dispatched from Cochin in 48 hours • Insured
                international delivery
              </span>
            </div>
          </div>
          {/* Image Canvas (Col 8-12) */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full p-4 lg:p-6 flex items-center justify-center">
            <div className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden shadow-lg border border-surface-container-highest group">
              <img
                alt="Editorial luxury still-life photograph of Kerala monsoon harvest wild high-range spices and botanicals with virgin coconut oil, Tellicherry black peppercorns, cardamom pods, fresh turmeric rhizomes, cinnamon quills, and wild forest honey"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR6snJBBsfdeHDDFyz_S3lXuDa94ZKJvdT_XUu8sSN4iEA9HGiaG_ZgzMXC6e1pLsWnzxqJfN0Q1OnMqz1lAtOAd44qDO-DDj5fONF6GO8Z96-nyccvvD1q03LklewEuy1whHiWfMrPfAUB4Z5-8CTORjucLhAitahrR8SqYYAptLhEQWlt1d8hzDgXb6QTVscI26yVjmdRIWIN7VTQG5a88k-bupRb_SiCREctMGR4fNiTf9o0U1SSRnL3sOtHcuQ1YufZrL8HiD8XzI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-3 rounded-xl border border-surface-container-highest shadow-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-base text-secondary">
                      eco
                    </span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-wider">
                      Single-Estate Wayanad &amp; Idukki Harvest
                    </p>
                    <p className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
                      Late Monsoon Reserve • Batch #04 Certified
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-secondary/10 text-secondary font-label-sm text-[10px] font-bold uppercase tracking-wider shrink-0">
                  Cold Pressed &amp; Wild
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 6: Patron Testimonials & Global Critical Acclaim */}
      <section className="w-full px-6 lg:px-12 py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Patron Correspondence
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
              Revered by Curators Worldwide
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              From architectural residences in London to Michelin-starred dining
              in Manhattan, Kerala’s living material culture finds its place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1: London Designer */}
            <div className="bg-surface-container-low p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-tertiary mb-6">
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary font-normal leading-relaxed italic mb-6">
                  “The Aranmula Kannadi arrived in Mayfair in bespoke cedarwood
                  crating. The metallic luster has an ethereal warmth that
                  modern glass mirrors can never replicate.”
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 bg-surface-container-low">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm text-primary font-bold">
                  EH
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-primary font-bold">
                    Elena Harrington
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Interior Architect, London
                  </p>
                </div>
              </div>
            </div>
            {/* Review 2: New York Chef */}
            <div className="bg-surface-container-low p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-tertiary mb-6">
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary font-normal leading-relaxed italic mb-6">
                  “The Tellicherry Garbled Extra Bold peppercorns possess a
                  bright citrus, pine, and volcanic smoke profile. We grind them
                  tableside for our signature duck confit.”
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 bg-surface-container-low">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm text-primary font-bold">
                  MV
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-primary font-bold">
                    Chef Marcus Vance
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Two-Star Michelin Executive Chef, New York
                  </p>
                </div>
              </div>
            </div>
            {/* Review 3: Tokyo Collector */}
            <div className="bg-surface-container-low p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-tertiary mb-6">
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary font-normal leading-relaxed italic mb-6">
                  “The Balaramapuram Kasavu textile exhibits an extraordinary
                  tactile density. The natural unbleached cotton breathes, while
                  the real zari catches light like ancient Kyoto brocades.”
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 bg-surface-container-low">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm text-primary font-bold">
                  KT
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-primary font-bold">
                    Kenji Takahashi
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Asian Textile Conservator, Tokyo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 7: Kerala Cultural Editorial Dispatch */}
      <section className="w-full px-6 lg:px-12 py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                The Archival Gazette
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
                Dispatches on Material Culture
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                Deep-dive essays uncovering the metallurgical secrets, botanical
                trade winds, and lost traditions of God’s Own Country.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-secondary uppercase tracking-wider mt-4 md:mt-0 group font-bold"
              href="#archives"
            >
              <span className="">Explore All 32 Treatises</span>
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <article className="group bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  data-alt="Dramatic high-contrast archival photography of molten bell metal being poured into traditional clay molds in a dark Kerala metallurgy forge with orange sparks flying."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpkhldYOgC6G2_wSg-bY9HCfj-VeWBCSo4EHubgBuy1xtQDNSpBWXk8VZNp081WXV6BF7USbtX-8zlTskMRUVsUsXTc5zXJc9tGovTSj3-MnLgVVWgutM9snvY729F4SGVJJGbp29PfgVyTRDq97nR_lLYL3piEsPJDq--mk2AUbg7SZtOPa2eoy5OBAkTIXY7-Tix10u76WPJrB32SBWDSk8Dy6BzLNHDfc2Vi9CpXH1PKB-oGEXlXg"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-2">
                    <span className="">Metallurgy</span>
                    <span className="">•</span>
                    <span className="">8 Min Read</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-medium">
                    The Lost Alchemy of Front-Reflecting Bell Metal
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    Why the secret copper-tin alloy perfected in Aranmula during
                    the 16th century defies standard optical physics and remains
                    an unsolved metallurgical mystery.
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center gap-2 text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
                  <span className="">Read Treatise</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </div>
              </div>
            </article>
            {/* Story 2 */}
            <article className="group bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  data-alt="Ancient parchment maritime map showing shipping spice trade routes from the Malabar coast across the Indian Ocean to Rome and Venice with dried pepper vines."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgSGiAJUEPPpkPT4qXom813ulnLqbbtveySW7AubyHN6FC1skxGTyqvpo8x1USBRSIQ9d6foFI9QgPjeE2V-y061rZno0-qsDAfkQtpOQxZ_uS-xJT15mgi2GUAGIE5fkRAhalD_Z5AeC4YsWnR6m7LVQ2b4gUvZH6gQnbTCWfYRfEnXZUS_pEUM2AS9UMwsynaFCM_GwVC8F5CAeuLFwHVfF0hDWk-icN9rESGPEgqjOZAxPjFyjJmQ"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-2">
                    <span className="">Botanical History</span>
                    <span className="">•</span>
                    <span className="">12 Min Read</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-medium">
                    Black Gold: Why Wayanad Pepper Was Once Global Currency
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    From paying Roman ransoms during the siege of Alaric to
                    financing the European Age of Discovery, how a single
                    mountain berry shaped the modern geopolitical map.
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center gap-2 text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
                  <span className="">Read Treatise</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Section 8: Archival Consignment Assurance / Footnote Strip */}
      <section className="w-full px-6 lg:px-12 py-12 bg-primary-container text-on-primary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed shrink-0">
              <span className="material-symbols-outlined text-2xl">
                verified_user
              </span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider font-bold">
                The Pazhama Custodial Guarantee
              </h4>
              <p className="font-body-sm text-body-sm text-on-primary-container">
                Every consignment includes government GI registration numbers,
                artisan lineage signatures, and wooden presentation housing.
              </p>
            </div>
          </div>
          <a
            className="whitespace-nowrap px-6 py-3 bg-tertiary-container hover:bg-tertiary-fixed text-on-tertiary-container font-label-md text-label-md uppercase tracking-wider rounded transition-colors font-bold shadow-sm"
            href="#custody"
          >
            Request Provenance Dossier
          </a>
        </div>
      </section>
    </div>
  </main>
  <footer className="w-full bg-surface-container-low border-t border-surface-container-highest">
    <div className="bg-primary-container text-on-primary py-space-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="max-w-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed">
            The Kerala Letters
          </span>
          <h3 className="font-headline-md text-headline-md text-on-primary mt-1">
            Dispatches on artisanal craft, monsoon harvests &amp; living
            traditions.
          </h3>
          <p className="font-body-sm text-body-sm text-on-primary-container mt-2">
            Curated monthly folios delivered to connoisseurs and patrons
            globally.
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-space-sm items-stretch sm:items-center">
          <input
            className="bg-surface-container-lowest text-on-surface font-body-sm text-body-sm px-space-md py-3 rounded-lg border border-surface-variant focus:outline-none focus:ring-1 focus:ring-tertiary-container min-w-[280px]"
            placeholder="Enter your correspondence email..."
            type="email"
          />
          <button className="bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary font-label-md text-label-md uppercase tracking-wider px-space-lg py-3 rounded-lg transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
        <div className="space-y-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
              Pazhama.co
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            An international custodian platform chronicling authentic material
            provenance, sacred crafts, and indigenous harvests of God's Own
            Country.
          </p>
          <div className="pt-2 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded border border-surface-container-highest">
              <span className="material-symbols-outlined text-sm text-tertiary">
                verified
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                100% GI Tag Authenticated
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary-container">
                eco
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Living Heritage Fair Trade Guild
              </span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-bold mb-space-md">
            Shop by Region
          </h4>
          <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="regions-of-kerala"
                href="#"
              >
                Wayanad High Ranges
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="regions-of-kerala"
                href="#"
              >
                Aranmula Metalcraft
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="regions-of-kerala"
                href="#"
              >
                Balaramapuram Weaves
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="regions-of-kerala"
                href="#"
              >
                Chendamangalam Handlooms
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="regions-of-kerala"
                href="#"
              >
                Malabar Spice Coast
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-bold mb-space-md">
            Heritage &amp; Custodianship
          </h4>
          <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="our-story"
                href="#"
              >
                Artisan Collective Registry
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="gi-heritage"
                href="#"
              >
                Geographical Indications (GI)
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="our-story"
                href="#"
              >
                Sustainability &amp; Forest Foraging
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="gi-heritage"
                href="#"
              >
                Material Provenance Dossier
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="our-story"
                href="#"
              >
                Temple Architecture Restoration
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-bold mb-space-md">
            Client Concierge
          </h4>
          <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="patron-profile"
                href="#"
              >
                Worldwide Insured Shipping
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="patron-profile"
                href="#"
              >
                Track Heritage Consignment
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="our-story"
                href="#"
              >
                Heritage Object Care Guide
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="shop-catalog"
                href="#"
              >
                Bespoke Curatorial Gifting
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-secondary transition-colors"
                data-path="patron-profile"
                href="#"
              >
                Private Viewings &amp; Advisory
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-surface-container-highest py-space-md bg-surface-container">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
        <p className="">
          © 2025 Pazhama.co. Preserving Kerala's living material culture. All
          Rights Reserved.
        </p>
        <div className="flex items-center gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
            Verified Secure Settlement:
          </span>
          <div className="flex items-center gap-space-sm font-label-sm text-label-sm">
            <span className="px-2 py-0.5 bg-surface-container-lowest rounded border border-surface-container-highest">
              Visa
            </span>
            <span className="px-2 py-0.5 bg-surface-container-lowest rounded border border-surface-container-highest">
              Mastercard
            </span>
            <span className="px-2 py-0.5 bg-surface-container-lowest rounded border border-surface-container-highest">
              Amex
            </span>
            <span className="px-2 py-0.5 bg-surface-container-lowest rounded border border-surface-container-highest">
              Apple Pay
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Pazhama Archivist Concierge Floating Widget */}
  <div
    className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none"
    id="pazhama-curator-widget"
  >
    {/* Interactive Chat Drawer / Window */}
    <div
      className="pointer-events-auto mb-3 w-[380px] sm:w-[430px] max-w-[calc(100vw-2rem)] bg-surface-container-lowest rounded-2xl shadow-2xl border-2 border-primary/20 overflow-hidden transition-all duration-300 ease-out transform origin-bottom-right flex flex-col scale-100 opacity-100"
      id="curator-chat-modal"
      style={{ height: 570 }}
    >
      {/* Modal Header */}
      <div className="bg-primary p-4 text-on-primary flex items-center justify-between border-b border-primary-container shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full bg-primary-container flex items-center justify-center border border-tertiary-container/40 text-tertiary-fixed shrink-0">
            <span className="material-symbols-outlined text-xl">
              temple_hindu
            </span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-primary animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-headline-sm text-base text-on-primary font-medium tracking-tight">
                Heritage Archivist AI
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-[10px] uppercase font-bold tracking-wider">
                Online
              </span>
            </div>
            <p className="font-body-sm text-xs text-on-primary-container flex items-center gap-1.5 mt-0.5">
              GI Authentication, Product Guidance &amp; Global Shipping
            </p>
          </div>
        </div>
        <button
          aria-label="Close Curator Concierge"
          className="w-8 h-8 rounded-full hover:bg-primary-container text-on-primary-container hover:text-on-primary flex items-center justify-center transition-colors cursor-pointer"
          id="close-chat-btn"
          type="button"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>
      {/* Settlement Currency Bar inside Chat */}
      <div className="bg-surface-container-high px-4 py-2 border-b border-surface-container-highest flex items-center justify-between font-label-sm text-xs shrink-0">
        <span className="text-primary font-bold uppercase tracking-wider flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-tertiary">
            currency_exchange
          </span>
          Dual Currency Settlement:
        </span>
        <div className="flex items-center gap-1.5">
          <button
            className="px-2 py-0.5 rounded text-[11px] font-bold bg-primary text-on-primary transition-all cursor-pointer"
            id="chat-inr-toggle"
            type="button"
          >
            ₹ INR
          </button>
          <button
            className="px-2 py-0.5 rounded text-[11px] font-bold bg-surface-container-lowest text-on-surface hover:text-secondary transition-all cursor-pointer"
            id="chat-usd-toggle"
            type="button"
          >
            $ USD (~₹86.5)
          </button>
        </div>
      </div>
      {/* Chat Messages Scroll Area */}
      <div
        className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#fdfbf7]"
        id="chat-messages-container"
      >
        {/* AI Welcome Greeting */}
        <div className="flex gap-2.5 items-start">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed text-sm shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-base">
              temple_hindu
            </span>
          </div>
          <div className="flex-1 bg-surface-container-low p-3.5 rounded-2xl rounded-tl-none border border-surface-container-highest shadow-sm">
            <p className="font-body-sm text-xs sm:text-sm text-on-surface leading-relaxed">
              Namaskaram. Welcome to the{" "}
              <strong className="text-primary font-semibold">
                Pazhama Heritage Concierge
              </strong>
              . I am your resident archivist. Ask me regarding Aranmula mirror
              optical alloy secrets, single-estate Wayanad spice shelf life, or
              insured international export to North America, Europe, &amp; the
              Gulf.
            </p>
          </div>
        </div>
        {/* Quick Inquiry Prompt Buttons */}
        <div
          className="bg-surface-container/60 rounded-xl p-3 border border-tertiary-container/30 space-y-2"
          id="quick-inquiries-box"
        >
          <div className="flex items-center justify-between text-label-sm font-label-sm">
            <span className="text-secondary uppercase tracking-widest font-bold flex items-center gap-1 text-[11px]">
              <span className="material-symbols-outlined text-xs">
                auto_awesome
              </span>
              Suggested Inquiries
            </span>
            <span className="text-primary text-[10px] uppercase font-semibold">
              Tap to inquire
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5" id="concierge-quick-pills">
            <button
              className="chat-query-pill text-left px-2.5 py-1.5 bg-surface-container-lowest hover:bg-tertiary-container/20 text-on-surface font-body-sm text-xs rounded-lg border border-surface-container-highest transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-tertiary text-xs shrink-0">
                verified
              </span>
              <span className="">
                Aranmula mirror front reflection optical purity
              </span>
            </button>
            <button
              className="chat-query-pill text-left px-2.5 py-1.5 bg-surface-container-lowest hover:bg-tertiary-container/20 text-on-surface font-body-sm text-xs rounded-lg border border-surface-container-highest transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-tertiary text-xs shrink-0">
                flight_takeoff
              </span>
              <span className="">Export duties &amp; USD delivery</span>
            </button>
            <button
              className="chat-query-pill text-left px-2.5 py-1.5 bg-surface-container-lowest hover:bg-tertiary-container/20 text-on-surface font-body-sm text-xs rounded-lg border border-surface-container-highest transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-tertiary text-xs shrink-0">
                eco
              </span>
              <span className="">Wayanad pepper shelf life</span>
            </button>
            <button
              className="chat-query-pill text-left px-2.5 py-1.5 bg-surface-container-lowest hover:bg-tertiary-container/20 text-on-surface font-body-sm text-xs rounded-lg border border-surface-container-highest transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-tertiary text-xs shrink-0">
                inventory_2
              </span>
              <span className="">Custom wedding curation</span>
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-primary text-on-primary p-3 rounded-2xl rounded-tr-none font-body-sm text-xs sm:text-sm max-w-[85%] shadow-sm leading-relaxed">
            Custom wedding curation
          </div>
        </div>
        <div className="flex gap-2.5 items-start">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed text-sm shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-base">
              temple_hindu
            </span>
          </div>
          <div className="flex-1 bg-surface-container-low p-3.5 rounded-2xl rounded-tl-none border border-surface-container-highest shadow-sm">
            <p className="font-body-sm text-xs sm:text-sm text-on-surface leading-relaxed">
              Pazhama.co curates bespoke heritage wedding hampers, trousseau
              silks, and royal brass/bronze consignments for international
              couples and patrons. Each heirloom consignment includes bespoke
              cedarwood gifting boxes, personalized artisan calligraphy scrolls,
              and registered GI provenance deeds. We can coordinate custom
              dimensions and private previews.
            </p>
          </div>
        </div>
      </div>
      {/* Input Form */}
      <div className="p-3 bg-surface-container-lowest border-t border-surface-container-highest shrink-0">
        <form className="flex items-center gap-2" id="curator-chat-form">
          <div className="relative flex-1">
            <input
              autoComplete="off"
              className="w-full bg-surface-container-low text-on-surface font-body-sm text-xs pl-3 pr-8 py-2.5 rounded-lg border border-surface-container-highest focus:outline-none focus:ring-1 focus:ring-tertiary-container placeholder:text-outline"
              id="curator-query-input"
              placeholder="Ask about GI crafts, provenance, or USD prices..."
              type="text"
            />
            <span className="material-symbols-outlined text-outline text-sm absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
              search
            </span>
          </div>
          <button
            aria-label="Send curatorial inquiry"
            className="bg-primary hover:bg-primary-container text-on-primary w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 shadow-sm cursor-pointer"
            type="submit"
          >
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </form>
      </div>
    </div>
    {/* Persistent Floating Trigger Button */}
    <button
      aria-label="Heritage Archivist AI Concierge"
      className="pointer-events-auto group flex items-center gap-3.5 bg-primary-container hover:bg-primary text-on-primary pl-3.5 pr-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-tertiary-container/50 ring-4 ring-primary/20 cursor-pointer"
      id="open-chat-btn"
      type="button"
    >
      <div className="relative w-11 h-11 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed shadow-inner border border-tertiary-container/30">
        <span
          className="material-symbols-outlined text-2xl transition-transform group-hover:rotate-12"
          id="launcher-icon"
        >
          close
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-primary animate-pulse" />
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-2">
          <span className="font-label-sm text-label-sm font-bold tracking-wider uppercase text-on-primary leading-tight">
            Heritage Archivist AI
          </span>
          <span
            className="px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-[9px] font-bold uppercase tracking-wider"
            id="launcher-badge"
          >
            Minimize
          </span>
        </div>
        <span className="font-body-sm text-[11px] text-on-primary-container leading-tight mt-0.5">
          Ask GI Crafts, Product Search &amp; Export Enquiries
        </span>
      </div>
    </button>
  </div>
</>
