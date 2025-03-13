  {/* Tech Icons Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ amount: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2">
                            <div className="text-5xl">{skill.icon}</div>
                            <p className="text-lg font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </motion.div>
