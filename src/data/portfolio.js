import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiCodeigniter, SiTailwindcss, SiMysql, SiPhp, SiBootstrap } from 'react-icons/si';

export const personalInfo = {
  name: "Mazroha Anis Sugesti",
  nickname: "Anis",
  email: "mazrohaaniss@gmail.com",
  phone: "+6289646303500",
  instagram: "@mazrohaaniss",
  github: "mazrohaaniss",
  githubUrl: "https://github.com/mazrohaaniss",
  instagramUrl: "https://instagram.com/mazrohaaniss",
  title: "Web Developer",
  university: "Universitas Diponegoro",
  major: "S1 Teknik Komputer",
  bio: "Saya adalah mahasiswa S1 Teknik Komputer dengan minat dan keahlian dalam pengembangan web. Saya sangat antusias menggabungkan pengetahuan teknis dengan kreativitas untuk merancang solusi digital yang inovatif dan responsif.",
  bioExtended: "Selama studi, saya telah mengembangkan pemahaman mendalam tentang pengembangan aplikasi berbasis web menggunakan teknologi seperti CodeIgniter, React.js, HTML, CSS, dan JavaScript. Saya juga memiliki pengalaman dalam menggunakan Figma untuk merancang antarmuka pengguna yang menarik dan intuitif.",
};

export const experiences = [
  {
    id: 1,
    title: "Sales Assistant",
    company: "Buttonscarves",
    year: "2026 - Sekarang",
    type: "work",
    description: [
      "Mempromosikan dan merekomendasikan produk sesuai kebutuhan pelanggan",
      "Memberikan pelayanan yang ramah dan membantu pelanggan selama berada di area toko",
      "Berupaya mencapai target penjualan yang ditetapkan perusahaan",
      "Melaksanakan stock opname secara berkala untuk memastikan kesesuaian stok barang"
    ],
  },
  {
    id: 2,
    title: "Crew Store",
    company: "Dimsum Sumgo",
    year: "2026",
    type: "work",
    description: [
      "Memberikan pelayanan pelanggan secara cepat dan responsif",
      "Bekerja dalam tim untuk menjaga kelancaran operasional store",
    ],
  },
  {
    id: 3,
    title: "Intern Web Developer",
    company: "DINKOMINFO Kab. Pekalongan",
    year: "2025",
    type: "internship",
    description: [
      "Membuat Back-end website Edukasi dan Komunikasi",
      "Membuat Controller website Edukasi dan Komunikasi",
    ],
  },
  {
    id: 4,
    title: "Proyek Kuliah Kerja Nyata",
    company: "Desa Mlokomanis",
    year: "2025",
    type: "project",
    description: [
      "Membuat desain figma website Mlokomanis sektor Pertanian",
      "Membuat Full-stack role pertanian",
    ],
  },

  {
    id: 5,
    title: "Crew Store",
    company: "Teh Jawa",
    year: "2022",
    type: "work",
    description: [
      "Melayani pelanggan dengan ramah dan profesional",
      "Mengelola transaksi dan operasional store harian",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "S1 Teknik Komputer",
    school: "Universitas Diponegoro",
    year: "2022 – 2026",
    gpa: "3.86",
    current: false,
  },
  {
    id: 2,
    degree: "Rekayasa Perangkat Lunak",
    school: "SMK N 2 Semarang",
    year: "2019 – 2022",
    gpa: null,
    current: false,
  },
];

export const organizations = [
  {
    id: 1,
    role: "Sekretaris Bidang Ekobis",
    organization: "IZZATI GEN 31",
    description: [
      "Merekapitulasi kegiatan selama organisasi berjalan",
      "Mengkoordinasikan anggota staff Ekobis",
    ],
  },
  {
    id: 2,
    role: "Staff RISTEK",
    organization: "HIMASKOM",
    description: [
      "Menjadi penanggung jawab CE-LIB",
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title: "Juara 3 Lomba Web Development",
    event: "Silogy Expo 2025",
    icon: "🏆",
    link: "/Silogy Expo - Mazroha Anis Sugesti - Web Dev Juara 3.pdf",
  },
  {
    id: 2,
    title: "Finalis Lomba Web Design",
    event: "Techomfest 2025",
    icon: "🎖️",
    link: "/Finalis_Mazroha Anis Sugesti.pdf",
  },
  {
    id: 3,
    title: "Sertifikat Apresiasi",
    event: "Penghargaan",
    icon: "📜",
    link: "/sertifikat apresiasi_Mazroha Anis Sugesti.pdf",
  },
];

export const technicalSkills = [
  { name: "React.js", icon: FaReact, level: 85, color: "#61DAFB" },
  { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, level: 85, color: "#F7DF1E" },
  { name: "CodeIgniter", icon: SiCodeigniter, level: 80, color: "#EF4223" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "#06B6D4" },
  { name: "PHP", icon: SiPhp, level: 75, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, level: 75, color: "#4479A1" },
  { name: "Figma", icon: FaFigma, level: 80, color: "#F24E1E" },
  { name: "Git", icon: FaGitAlt, level: 80, color: "#F05032" },
  { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "#7952B3" },
  { name: "Node.js", icon: FaNodeJs, level: 70, color: "#339933" },
];

export const softSkills = [
  { name: "Pemecahan Masalah", emoji: "🧩", level: 90 },
  { name: "Kreativitas", emoji: "🎨", level: 95 },
  { name: "Komunikasi", emoji: "💬", level: 85 },
  { name: "Kerjasama Tim", emoji: "🤝", level: 90 },
  { name: "Ketekunan", emoji: "💪", level: 95 },
];

export const projects = [
  {
    id: 1,
    title: "Medisync",
    category: "web",
    tech: ["Hyperledger Fabric", "React.js", "Node.js"],
    description: "MediSync is a blockchain-based platform for secure and transparent pharmaceutical supply chains.",
    image: "/medisync.png",
    link: "https://github.com/Ediw7/medisync-project"
  },
  {
    id: 2,
    title: "Taniku",
    category: "web",
    tech: ["React.js", "Supabase"],
    description: "Taniku is a digital platform connecting farmers and government agencies to support agricultural data, coordination, and services.",
    image: "/taniku.jpg",
    link: "https://taniku.vercel.app/"
  },
  {
    id: 3,
    title: "River Clean",
    category: "web",
    tech: ["React.js", "Supabase"],
    description: "RiverClean is a website for campaigns and education on river conservation and environmental awareness.",
    image: "/river.jpg",
    link: "https://river-clean.vercel.app/"
  },
  {
    id: 4,
    title: "Biofun",
    category: "web",
    tech: ["React.js"],
    description: "BIOFUN is an interactive e-learning platform designed to make biology learning engaging and accessible.",
    image: "/biofun.png",
    link: "https://biofun.vercel.app/"
  },
  {
    id: 5,
    title: "Mlokowetanku",
    category: "web",
    tech: ["React.js", "Tailwind CSS"],
    description: "A digital village profile website built to showcase local agricultural potential and improve public information access.",
    image: "/mlokomanis.png",
    link: "https://mlokowetanku.vercel.app/"
  },
  {
    id: 6,
    title: "EduKom",
    category: "web",
    tech: ["CodeIgniter", "PHP", "Bootstrap"],
    description: "An interactive learning platform designed to enhance digital skills in fields like cybersecurity and AI through up-to-date materials.",
    image: "/Dashboard.png",
    link: "https://github.com/mazrohaaniss/eduKom.git"
  }
];

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Awards", to: "awards" },
  { name: "Contact", to: "contact" },
];
