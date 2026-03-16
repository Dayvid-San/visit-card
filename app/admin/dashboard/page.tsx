"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormData {
  title: string;
  description: string;
  image: string; // Voltamos para string simples
  tags: string;
  date: string;
  role: string;
  github: string;
  demo: string;
  paper: string;
  dataset: string;
}

const initialFormState: FormData = {
  title: "", description: "", image: "", tags: "",
  date: "", role: "", github: "", demo: "", paper: "", dataset: ""
};

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [projectCategory, setProjectCategory] = useState<"programmer" | "research">("programmer");
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [statusMessage, setStatusMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/admin");
      else setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("Saving...");

    try {
      const tagsArray = formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag !== "");

      const payload: any = {
        title: formData.title,
        description: formData.description,
        image: formData.image, // Pega o link da imagem direto do form
        tags: tagsArray,
        date: formData.date,
        role: formData.role,
      };

      if (projectCategory === "programmer") {
        if (formData.github) payload.github = formData.github;
        if (formData.demo) payload.demo = formData.demo;
        await addDoc(collection(db, "programmerProjects"), payload);
      } else {
        if (formData.paper) payload.paper = formData.paper;
        if (formData.dataset) payload.dataset = formData.dataset;
        if (formData.github) payload.github = formData.github;
        await addDoc(collection(db, "researchProjects"), payload);
      }

      setStatusMessage("Project added successfully!");
      setFormData(initialFormState);
      setTimeout(() => setStatusMessage(""), 3000);

    } catch (error: any) {
      console.error("Error adding document: ", error);
      // Agora, se o texto for muito grande, ele avisa aqui em vermelho!
      setStatusMessage(`Error: ${error.message}`); 
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin");
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!user) return null;

  return (
    <div className="container px-4 py-10 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Project</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Button 
              variant={projectCategory === "programmer" ? "default" : "outline"}
              onClick={() => setProjectCategory("programmer")}
            >
              Programmer Project
            </Button>
            <Button 
              variant={projectCategory === "research" ? "default" : "outline"}
              onClick={() => setProjectCategory("research")}
            >
              Research Project
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <label className="text-sm">Title *</label>
              <input required name="title" value={formData.title} onChange={handleInputChange} className="w-full p-2 border rounded bg-background" />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="text-sm">Description *</label>
              <textarea required name="description" value={formData.description} onChange={handleInputChange} className="w-full p-2 border rounded bg-background" rows={3} />
            </div>

            {/* Campo de Imagem em Texto Restaurado */}
            <div>
              <label className="text-sm">Image URL / Path *</label>
              <input 
                required 
                name="image" 
                value={formData.image} 
                onChange={handleInputChange} 
                placeholder="https://... ou /image.png" 
                className="w-full p-2 border rounded bg-background" 
              />
            </div>

            <div>
              <label className="text-sm">Tags (comma separated) *</label>
              <input required name="tags" value={formData.tags} onChange={handleInputChange} placeholder="React, Node, Firebase" className="w-full p-2 border rounded bg-background" />
            </div>

            <div>
              <label className="text-sm">Date *</label>
              <input required name="date" value={formData.date} onChange={handleInputChange} placeholder="2024-2026" className="w-full p-2 border rounded bg-background" />
            </div>

            <div>
              <label className="text-sm">Role *</label>
              <input required name="role" value={formData.role} onChange={handleInputChange} className="w-full p-2 border rounded bg-background" />
            </div>

            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t mt-2">
              {projectCategory === "programmer" ? (
                <>
                  <div>
                    <label className="text-sm">GitHub URL</label>
                    <input name="github" value={formData.github} onChange={handleInputChange} className="w-full p-2 border rounded bg-background" />
                  </div>
                  <div>
                    <label className="text-sm">Demo URL</label>
                    <input name="demo" value={formData.demo} onChange={handleInputChange} className="w-full p-2 border rounded bg-background" />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="text-sm">Paper URL</label>
                    <input name="paper" value={formData.paper} onChange={handleInputChange} className="w-full p-2 border rounded bg-background" />
                  </div>
                  <div>
                    <label className="text-sm">Dataset URL</label>
                    <input name="dataset" value={formData.dataset} onChange={handleInputChange} className="w-full p-2 border rounded bg-background" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="text-sm">GitHub URL</label>
                    <input name="github" value={formData.github} onChange={handleInputChange} className="w-full p-2 border rounded bg-background" />
                  </div>
                </>
              )}
            </div>

            <div className="col-span-1 md:col-span-2 flex items-center gap-4 mt-4">
              <Button type="submit" className="w-full md:w-auto">Save Project</Button>
              {statusMessage && (
                <span className={`text-sm font-medium ${statusMessage.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                  {statusMessage}
                </span>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}