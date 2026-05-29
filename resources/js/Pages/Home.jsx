import { Head } from '@inertiajs/react';

const logoUrl = '/images/logo-sapujogan.png';

const navigation = [
    { label: 'Profil', href: '#profil' },
    { label: 'Program', href: '#program' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Nilai', href: '#nilai' },
];

const focusAreas = [
    {
        title: 'Tari Tradisi',
        label: 'Gerak',
        description: 'Latihan dasar tubuh, wiraga, wirama, dan eksplorasi koreografi yang dekat dengan akar budaya.',
    },
    {
        title: 'Musik Pengiring',
        label: 'Irama',
        description: 'Ruang belajar ritme, bunyi, dan pendampingan suasana pementasan secara kolaboratif.',
    },
    {
        title: 'Kriya & Rupa',
        label: 'Rupa',
        description: 'Eksplorasi properti, busana, simbol visual, dan detail panggung yang memperkuat identitas karya.',
    },
    {
        title: 'Pementasan',
        label: 'Panggung',
        description: 'Simulasi tampil, dokumentasi karya, dan pengemasan pertunjukan untuk ruang komunitas maupun publik.',
    },
];

const signals = [
    { value: '01', label: 'Ruang tumbuh untuk warga seni lintas usia' },
    { value: '04', label: 'Fokus latihan: gerak, irama, rupa, panggung' },
    { value: '12', label: 'Format kegiatan yang dapat dikembangkan modular' },
];

const agenda = [
    'Latihan rutin mingguan',
    'Kelas pengenalan seni tradisi',
    'Workshop koreografi dan properti',
    'Kurasi karya untuk pementasan komunitas',
    'Dokumentasi arsip visual Sapujogan',
    'Kolaborasi dengan sekolah dan pelaku budaya',
];

const values = [
    'Ngrumat tradisi',
    'Tumbuh bersama',
    'Rapi dalam proses',
    'Berani tampil',
    'Terbuka berkolaborasi',
    'Membumi di komunitas',
];

const matrix = Array.from({ length: 32 }, (_, index) => index + 1);

const pagePattern = {
    backgroundImage:
        'radial-gradient(circle at 20% 10%, rgba(216, 180, 95, 0.18), transparent 28rem), radial-gradient(circle at 80% 0%, rgba(124, 58, 237, 0.14), transparent 24rem), linear-gradient(rgba(216, 180, 95, 0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(216, 180, 95, 0.065) 1px, transparent 1px)',
    backgroundSize: 'auto, auto, 34px 34px, 34px 34px',
};

const cardPattern = {
    backgroundImage:
        'linear-gradient(135deg, rgba(216, 180, 95, 0.12) 0, rgba(216, 180, 95, 0.02) 34%, transparent 34%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
    backgroundSize: '100% 100%, 18px 18px, 18px 18px',
};

function SectionHeading({ eyebrow, title, description }) {
    return (
        <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#d8b45f]">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">{description}</p>
        </div>
    );
}

function SignalCard({ value, label }) {
    return (
        <div className="border border-[#d8b45f]/20 bg-black/50 p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <p className="font-mono text-3xl text-[#d8b45f]">{value}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{label}</p>
        </div>
    );
}

function FocusCard({ item, index }) {
    return (
        <article className="group relative overflow-hidden border border-white/10 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d8b45f]/50">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8b45f]/70 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-xs text-zinc-500">0{index + 1}</span>
                <span className="rounded-full border border-[#d8b45f]/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d8b45f]">
                    {item.label}
                </span>
            </div>
            <h3 className="mt-8 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>
        </article>
    );
}

function MatrixPanel() {
    return (
        <div className="grid grid-cols-8 border border-white/10 bg-black/60">
            {matrix.map((item) => (
                <div
                    key={item}
                    className="flex aspect-square items-center justify-center border-b border-r border-white/10 text-[10px] text-zinc-600"
                >
                    {String(item).padStart(2, '0')}
                </div>
            ))}
        </div>
    );
}

function AgendaList() {
    return (
        <div className="grid gap-3 md:grid-cols-2">
            {agenda.map((item, index) => (
                <div key={item} className="flex items-center gap-4 border border-white/10 bg-white/[0.03] p-4">
                    <span className="font-mono text-xs text-[#d8b45f]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-zinc-300">{item}</span>
                </div>
            ))}
        </div>
    );
}

function ValuePill({ value }) {
    return (
        <span className="border border-[#d8b45f]/25 bg-[#d8b45f]/10 px-4 py-3 text-sm font-medium text-[#f5d990]">
            {value}
        </span>
    );
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Sanggar Seni Sapujogan</title>
                <meta
                    name="description"
                    content="Landing page Sanggar Seni Sapujogan dengan fokus seni tradisi, tari, musik, kriya, dan pementasan."
                />
            </Head>

            <main className="min-h-screen overflow-hidden bg-black text-white" style={pagePattern}>
                <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
                    <div className="pointer-events-none absolute inset-0 border-x border-[#d8b45f]/10" />

                    <header className="relative z-10 flex items-center justify-between border border-white/10 bg-black/70 px-4 py-3 backdrop-blur md:px-6">
                        <a href="#" className="flex items-center gap-3">
                            <img src={logoUrl} alt="Logo Sapujogan" className="h-12 w-12 rounded-full object-contain" />
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#d8b45f]">
                                    Sapujogan
                                </p>
                                <p className="text-xs text-zinc-500">Sanggar Seni</p>
                            </div>
                        </a>

                        <nav className="hidden items-center gap-1 md:flex">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400 transition hover:bg-white/5 hover:text-[#d8b45f]"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </header>

                    <section className="relative z-10 grid flex-1 items-center gap-8 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
                        <div>
                            <div className="inline-flex items-center gap-3 border border-[#d8b45f]/20 bg-[#d8b45f]/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[#f5d990]">
                                <span className="h-2 w-2 rounded-full bg-[#d8b45f]" />
                                Ruang Seni Tradisi
                            </div>

                            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
                                Merawat akar budaya lewat gerak, irama, dan karya panggung.
                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                                Sanggar Seni Sapujogan menjadi ruang belajar, berkarya, dan berkolaborasi untuk
                                menghadirkan seni tradisi yang hidup, rapi, dan dekat dengan masyarakat.
                            </p>

                            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="#program"
                                    className="inline-flex items-center justify-center bg-[#d8b45f] px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-[#f5d990]"
                                >
                                    Lihat Program
                                </a>
                                <a
                                    href="#profil"
                                    className="inline-flex items-center justify-center border border-white/15 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-[#d8b45f]/60 hover:text-[#d8b45f]"
                                >
                                    Tentang Sanggar
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                className="relative overflow-hidden border border-[#d8b45f]/25 bg-black/80 p-6 shadow-2xl shadow-black"
                                style={cardPattern}
                            >
                                <div className="absolute right-6 top-6 font-mono text-xs text-[#d8b45f]/60">
                                    SPJGN / 01
                                </div>
                                <div className="flex min-h-[430px] items-center justify-center">
                                    <img
                                        src={logoUrl}
                                        alt="Logo Sanggar Seni Sapujogan"
                                        className="w-full max-w-md object-contain drop-shadow-[0_28px_80px_rgba(216,180,95,0.28)]"
                                        loading="eager"
                                        fetchPriority="high"
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {signals.map((item) => (
                                        <SignalCard key={item.value} value={item.value} label={item.label} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section id="profil" className="border-y border-white/10 bg-zinc-950/80 py-20">
                    <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
                        <SectionHeading
                            eyebrow="Profil"
                            title="Sederhana di bentuk, padat di proses."
                            description="Sapujogan dirancang sebagai rumah kerja seni: tempat latihan, pencatatan, eksplorasi, dan pertemuan antar pelaku budaya berlangsung dalam satu alur yang mudah dikembangkan."
                        />
                        <div className="grid gap-4 sm:grid-cols-2">
                            <MatrixPanel />
                            <div className="border border-white/10 bg-black/60 p-6">
                                <p className="text-sm uppercase tracking-[0.34em] text-[#d8b45f]">Cara Kerja</p>
                                <p className="mt-6 text-2xl font-semibold leading-snug text-white">
                                    Latihan dibuat terstruktur, tetapi tetap memberi ruang bagi improvisasi dan rasa.
                                </p>
                                <p className="mt-6 text-sm leading-7 text-zinc-400">
                                    Pola ini memudahkan Sapujogan menambah modul seperti jadwal kelas, arsip karya,
                                    registrasi peserta, atau halaman agenda tanpa mengubah fondasi visual.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="program" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
                    <SectionHeading
                        eyebrow="Program"
                        title="Empat fokus utama untuk membangun karya dari dasar sampai panggung."
                        description="Setiap fokus bisa berdiri sebagai modul kegiatan, tetapi tetap tersambung dalam satu ekosistem seni Sapujogan."
                    />
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {focusAreas.map((item, index) => (
                            <FocusCard key={item.title} item={item} index={index} />
                        ))}
                    </div>
                </section>

                <section id="agenda" className="border-y border-white/10 bg-black/80 py-20">
                    <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
                        <SectionHeading
                            eyebrow="Agenda"
                            title="Kegiatan yang siap dipetakan menjadi modul."
                            description="Daftar ini menjadi kerangka awal untuk pengembangan fitur berikutnya, mulai dari kalender acara sampai katalog dokumentasi."
                        />
                        <AgendaList />
                    </div>
                </section>

                <section id="nilai" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
                    <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
                        <SectionHeading
                            eyebrow="Nilai"
                            title="Identitas visual hitam dan emas, karakter kerja yang membumi."
                            description="Tema high-density menjaga halaman terasa hidup, sementara struktur React dan Inertia menjaga konten tetap mudah dipelihara."
                        />
                        <div className="flex flex-wrap content-start gap-3">
                            {values.map((value) => (
                                <ValuePill key={value} value={value} />
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="border-t border-white/10 bg-zinc-950 px-5 py-8 sm:px-8 lg:px-10">
                    <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-3">
                            <img src={logoUrl} alt="" className="h-10 w-10 object-contain" />
                            <div>
                                <p className="font-semibold text-white">Sanggar Seni Sapujogan</p>
                                <p className="text-sm text-zinc-500">Gerak, irama, rupa, dan panggung.</p>
                            </div>
                        </div>
                        <p className="text-xs uppercase tracking-[0.28em] text-zinc-600">
                            Built with Laravel, Inertia, React
                        </p>
                    </div>
                </footer>
            </main>
        </>
    );
}
